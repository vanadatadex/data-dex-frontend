/* eslint-env node */
const { VanillaExtractPlugin } = require('@vanilla-extract/webpack-plugin')
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin')
const { execSync } = require('child_process')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const path = require('path')
const ModuleScopePlugin = require('react-dev-utils/ModuleScopePlugin')
const { IgnorePlugin, ProvidePlugin } = require('webpack')
const { RetryChunkLoadPlugin } = require('webpack-retry-chunk-load-plugin')

const commitHash = execSync('git rev-parse HEAD').toString().trim()
const isProduction = process.env.NODE_ENV === 'production'
const isDevelopment = !isProduction

process.env.REACT_APP_GIT_COMMIT_HASH = commitHash

module.exports = {
  eslint: {
    enable: !isProduction,
    pluginOptions(eslintConfig) {
      return Object.assign(eslintConfig, {
        cache: true,
        cacheLocation: path.join(__dirname, 'node_modules/.cache/eslint/'),
        ignorePath: '.gitignore',
        eslintPath: require.resolve('eslint'),
        resolvePluginsRelativeTo: null,
        baseConfig: null,
      })
    },
  },

  typescript: {
    enableTypeChecking: !isProduction,
  },

  jest: {
    configure(jestConfig) {
      return Object.assign(jestConfig, {
        cacheDirectory: path.join(__dirname, 'node_modules/.cache/jest/'),
        transform: {
          '\\.css\\.ts$': '@vanilla-extract/jest-transform',
          '\\.(t|j)sx?$': '@swc/jest',
        },
        transformIgnorePatterns: ['d3-array'],
        moduleNameMapping: { 'd3-array': 'd3-array/dist/d3-array.min.js' },
      })
    },
  },

  webpack: {
    plugins: [
      // polyfill process and Buffer for react-markdown, etc.
      new ProvidePlugin({ 
        process: 'process/browser',
        Buffer: ['buffer', 'Buffer']
      }),
      new VanillaExtractPlugin(),
      new RetryChunkLoadPlugin({
        cacheBust: `function() { return 'cache-bust=' + Date.now(); }`,
        retryDelay: `function(attempt) { return 2 ** (attempt - 1) * 500; }`,
        maxRetries: 3,
      }),
    ],

    configure: (webpackConfig) => {
      // -- no dev source-maps
      if (isDevelopment) webpackConfig.devtool = false

      // strip unwanted plugins
      webpackConfig.plugins = webpackConfig.plugins
        .map((plugin) => {
          if (plugin instanceof MiniCssExtractPlugin) plugin.options.ignoreOrder = true
          if (plugin.constructor.name === 'ForkTsCheckerWebpackPlugin') {
            delete plugin.options.typescript.configOverwrite
          }
          return plugin
        })
        .filter((p) => !(p instanceof CaseSensitivePathsPlugin) && !(p instanceof IgnorePlugin))

      // add node-core fallbacks
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
          buffer: require.resolve("buffer"),
          process: require.resolve("process/browser"),
          'process/browser': require.resolve('process/browser'),
          stream: require.resolve("stream-browserify"),
          util: require.resolve("util"),
          crypto: require.resolve("crypto-browserify"),
          fs: false,
          url: require.resolve("url"),
          assert: require.resolve("assert"),
          http: require.resolve("stream-http"),
          https: require.resolve("https-browserify"),
          zlib: require.resolve("browserify-zlib"),
          querystring: require.resolve("querystring-es3"),
          module: false,
        },
        unsafeCache: true,
      }

      // Fix for ESM modules requiring fully specified paths
      webpackConfig.module.rules.unshift({
        test: /\.m?js$/,
        resolve: {
          fullySpecified: false,
        },
      });

      // ▶️ Replace all babel-loader rules with swc-loader (no presets, no input maps)
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
                      experimental: {
                        plugins: [
                          ['@lingui/swc-plugin', {}],
                        ],
                      },
                    },
                    module: { type: 'es6' },
                    sourceMaps: false,
                    inputSourceMap: false,
                    inlineSourcesContent: false,
                  },
                },
              }
            }
            // ensure any existing swc‐loader also has maps off
            if (r.loader && r.loader.includes('swc-loader')) {
              return {
                ...r,
                options: { ...r.options, sourceMaps: false, inputSourceMap: false },
              }
            }
            return r
          })
        }
      })

      // terser pass for node_modules
      webpackConfig.module.rules.push({
        enforce: 'post',
        test: /node_modules.*\.(js)$/,
        loader: path.join(__dirname, 'scripts/terser-loader.js'),
        options: { compress: true, mangle: false },
      })

      // splitChunks
      webpackConfig.optimization = {
        ...webpackConfig.optimization,
        ...(isProduction && {
          splitChunks: { chunks: 'all', maxSize: 5 * 1024 * 1024 },
        }),
      }

      // Ignore source map warnings
      webpackConfig.ignoreWarnings = [/Failed to parse source map/];

      return webpackConfig
    },
  },
}
