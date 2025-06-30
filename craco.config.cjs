/* eslint-env node */
const path = require('path')
const { execSync } = require('child_process')
const webpack = require('webpack')
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin')
const { VanillaExtractPlugin } = require('@vanilla-extract/webpack-plugin')
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { IgnorePlugin } = require('webpack')
const { RetryChunkLoadPlugin } = require('webpack-retry-chunk-load-plugin')
const ModuleScopePlugin = require('react-dev-utils/ModuleScopePlugin')

const commitHash = execSync('git rev-parse HEAD').toString().trim()
const isProduction = process.env.NODE_ENV === 'production'
const isDevelopment = !isProduction

process.env.REACT_APP_GIT_COMMIT_HASH = commitHash

module.exports = {
  eslint: {
    enable: !isProduction,
    pluginOptions(eslintConfig) {
      return {
        ...eslintConfig,
        cache: true,
        cacheLocation: path.join(__dirname, 'node_modules/.cache/eslint/'),
        ignorePath: '.gitignore',
        eslintPath: require.resolve('eslint'),
        resolvePluginsRelativeTo: null,
        baseConfig: null,
      }
    },
  },

  typescript: {
    enableTypeChecking: !isProduction,
  },

  jest: {
    configure(jestConfig) {
      return {
        ...jestConfig,
        cacheDirectory: path.join(__dirname, 'node_modules/.cache/jest/'),
        transform: {
          '\\.css\\.ts$': '@vanilla-extract/jest-transform',
          '\\.(t|j)sx?$': '@swc/jest',
        },
        transformIgnorePatterns: ['d3-array'],
        moduleNameMapping: {
          'd3-array': 'd3-array/dist/d3-array.min.js',
        },
      }
    },
  },

  webpack: {
    plugins: [
      new webpack.ProvidePlugin({
        process: 'process/browser',
        Buffer: ['buffer', 'Buffer'],
      }),
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
        'process.browser': 'true',
        'process.version': JSON.stringify(process.version || 'v18.0.0'),
        global: 'globalThis',
      }),
      new NodePolyfillPlugin(),
      new VanillaExtractPlugin(),
      new RetryChunkLoadPlugin({
        cacheBust: `function() { return 'cache-bust=' + Date.now(); }`,
        retryDelay: `function(attempt) { return 2 ** (attempt - 1) * 500; }`,
        maxRetries: 3,
      }),
    ],

    configure: (webpackConfig) => {
      if (isDevelopment) {
        webpackConfig.devtool = false
      }

      webpackConfig.plugins = webpackConfig.plugins
        .map((plugin) => {
          if (plugin instanceof MiniCssExtractPlugin) {
            plugin.options.ignoreOrder = true
          }
          if (plugin.constructor.name === 'ForkTsCheckerWebpackPlugin') {
            delete plugin.options.typescript.configOverwrite
          }
          return plugin
        })
        .filter(
          (plugin) =>
            !(plugin instanceof CaseSensitivePathsPlugin) &&
            !(plugin instanceof IgnorePlugin)
        )

      webpackConfig.resolve = {
        ...webpackConfig.resolve,
        plugins: webpackConfig.resolve.plugins.map((plugin) => {
          if (plugin instanceof ModuleScopePlugin) {
            plugin.allowedPaths.push(
              path.join(__dirname, 'node_modules/@vanilla-extract/webpack-plugin')
            )
          }
          return plugin
        }),
        fallback: {
          ...(webpackConfig.resolve.fallback || {}),
          path: require.resolve('path-browserify'),
          os: require.resolve('os-browserify/browser'),
          buffer: require.resolve('buffer'),
          process: require.resolve('process/browser'), // ✅ Fixed - no .js extension
          stream: require.resolve('stream-browserify'),
          util: require.resolve('util'),
          module: require.resolve('module'),
          crypto: require.resolve('crypto-browserify'),
          fs: false,
          url: require.resolve('url'),
          assert: require.resolve('assert'),
          http: require.resolve('stream-http'),
          https: require.resolve('https-browserify'),
          zlib: require.resolve('browserify-zlib'),
          querystring: require.resolve('querystring-es3'),
          // ✅ Add explicit process/browser fallback
          'process/browser': require.resolve('process/browser'),
        },
        alias: {
          ...(webpackConfig.resolve.alias || {}),
          process: require.resolve('process/browser'), // ✅ Fixed - no .js extension
          // ✅ Add explicit process/browser alias
          'process/browser': require.resolve('process/browser'),
        },
        extensionAlias: {
          '.js': ['.js', '.ts', '.tsx'],
          '.mjs': ['.mjs', '.js', '.ts', '.tsx'],
        },
        unsafeCache: true,
      }

      // Allow ESM imports without full paths
      webpackConfig.module.rules.unshift({
        test: /\.m?js$/,
        resolve: { fullySpecified: false },
      })

      // ✅ Specific patch for styled-components and other problematic modules
      webpackConfig.module.rules.unshift({
        test: /node_modules\/(styled-components|@reown|lru-cache|axios|@reach|@reduxjs|@walletconnect|debug|detect-browser|js-sha3|semver|vfile)\/.*\.js$/,
        resolve: { fullySpecified: false },
      })

      webpackConfig.module.rules.forEach((rule) => {
        if (rule.oneOf) {
          rule.oneOf = rule.oneOf.map((r) => {
            if (r.loader && /babel-loader/.test(r.loader)) {
              return {
                test: r.test,
                exclude: r.exclude,
                use: {
                  loader: 'swc-loader',
                  options: {
                    jsc: {
                      parser: {
                        syntax: 'typescript',
                        tsx: true,
                        decorators: false,
                        dynamicImport: true,
                      },
                      transform: {
                        react: { runtime: 'automatic', development: false },
                      },
                      target: 'es2020',
                      keepClassNames: true,
                      experimental: { plugins: [['@lingui/swc-plugin', {}]] },
                    },
                    module: { type: 'es6' },
                    sourceMaps: false,
                    inputSourceMap: false,
                    inlineSourcesContent: false,
                  },
                },
              }
            }
            return r
          })
        }
      })

      webpackConfig.optimization = {
        ...webpackConfig.optimization,
        ...(isProduction && { splitChunks: { chunks: 'all', maxSize: 5 * 1024 * 1024 } }),
      }

      webpackConfig.ignoreWarnings = [
        /Failed to parse source map/,
        /Module not found: Error: Can't resolve 'process\/browser'/,
        /BREAKING CHANGE: The request.*fully specified/,
      ]

      webpackConfig.watchOptions = {
        ...webpackConfig.watchOptions,
        ignored: /node_modules/,
      }

      return webpackConfig
    },
  },
}
