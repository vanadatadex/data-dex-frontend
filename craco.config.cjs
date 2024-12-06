/* eslint-env node */
const { VanillaExtractPlugin } = require('@vanilla-extract/webpack-plugin')
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin')
const { execSync } = require('child_process')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const path = require('path')
const ModuleScopePlugin = require('react-dev-utils/ModuleScopePlugin')
const { IgnorePlugin, ProvidePlugin } = require('webpack')
const { RetryChunkLoadPlugin } = require('webpack-retry-chunk-load-plugin')
const threadLoader = require('thread-loader')
const CracoEsbuildPlugin = require('craco-esbuild')
const webpack = require('webpack')

// Warmup thread pool before starting development
threadLoader.warmup(
  {
    // pool options
    workers: 4,
    workerParallelJobs: 50,
    poolTimeout: 2000,
  },
  ['swc-loader']
)

const commitHash = execSync('git rev-parse HEAD').toString().trim()
const isProduction = process.env.NODE_ENV === 'production'
// const isDevelopment = !isProduction

process.env.REACT_APP_GIT_COMMIT_HASH = commitHash

// Disable linting and type checking in production
const shouldLintOrTypeCheck = false

function getCacheDirectory(cacheName) {
  // Include the trailing slash to denote that this is a directory.
  return `${path.join(__dirname, 'node_modules/.cache/', cacheName)}/`
}

module.exports = {
  eslint: {
    enable: shouldLintOrTypeCheck,
    pluginOptions(eslintConfig) {
      return Object.assign(eslintConfig, {
        cache: true,
        cacheLocation: getCacheDirectory('eslint'),
        ignorePath: '.gitignore',
        // Use our own eslint/plugins/config, as overrides interfere with caching.
        // This ensures that `yarn start` and `yarn lint` share one cache.
        eslintPath: require.resolve('eslint'),
        resolvePluginsRelativeTo: null,
        baseConfig: null,
      })
    },
  },
  typescript: {
    enableTypeChecking: shouldLintOrTypeCheck,
  },
  jest: {
    configure(jestConfig) {
      return Object.assign(jestConfig, {
        cacheDirectory: getCacheDirectory('jest'),
        transform: {
          ...Object.entries(jestConfig.transform).reduce((transform, [key, value]) => {
            if (value.match(/babel/)) return transform
            return { ...transform, [key]: value }
          }, {}),
          // Transform vanilla-extract using its own transformer.
          // See https://sandroroth.com/blog/vanilla-extract-cra#jest-transform.
          '\\.css\\.ts$': '@vanilla-extract/jest-transform',
          '\\.(t|j)sx?$': '@swc/jest',
        },
        // Use d3-arrays's build directly, as jest does not support its exports.
        transformIgnorePatterns: ['d3-array'],
        moduleNameMapper: {
          'd3-array': 'd3-array/dist/d3-array.min.js',
        },
      })
    },
  },
  babel: {
    plugins: ['macros'],
  },
  webpack: {
    plugins: [
      // Webpack 5 does not polyfill node globals, so we do so for those necessary:
      new ProvidePlugin({
        // - react-markdown requires process.cwd
        process: 'process/browser.js',
      }),
      new VanillaExtractPlugin(),
      new RetryChunkLoadPlugin({
        cacheBust: `function() {
          return 'cache-bust=' + Date.now();
        }`,
        // Retries with exponential backoff (500ms, 1000ms, 2000ms).
        retryDelay: `function(retryAttempt) {
          return 2 ** (retryAttempt - 1) * 500;
        }`,
        maxRetries: 3,
      }),
      new webpack.DefinePlugin({
        process: { env: {}, browser: {} },
      }),
    ],
    configure: (webpackConfig) => {
      // Disable source maps in production and development
      webpackConfig.devtool = false

      // Enable persistent caching
      webpackConfig.cache = {
        type: 'filesystem',
        buildDependencies: {
          config: [__filename],
        },
      }

      // Configure webpack plugins:
      webpackConfig.plugins = webpackConfig.plugins
        .map((plugin) => {
          // CSS ordering is mitigated through scoping / naming conventions, so we can ignore order warnings.
          // See https://webpack.js.org/plugins/mini-css-extract-plugin/#remove-order-warnings.
          if (plugin instanceof MiniCssExtractPlugin) {
            plugin.options.ignoreOrder = true
          }

          // Disable TypeScript's config overwrite, as it interferes with incremental build caching.
          // This ensures that `yarn start` and `yarn typecheck` share one cache.
          if (plugin.constructor.name == 'ForkTsCheckerWebpackPlugin') {
            delete plugin.options.typescript.configOverwrite
          }

          return plugin
        })
        .filter((plugin) => {
          // Case sensitive paths are already enforced by TypeScript.
          // See https://www.typescriptlang.org/tsconfig#forceConsistentCasingInFileNames.
          if (plugin instanceof CaseSensitivePathsPlugin) return false

          // IgnorePlugin is used to tree-shake moment locales, but we do not use moment in this project.
          if (plugin instanceof IgnorePlugin) return false

          return true
        })

      // Optimize module resolution
      webpackConfig.resolve = Object.assign(webpackConfig.resolve, {
        plugins: webpackConfig.resolve.plugins.map((plugin) => {
          // Allow vanilla-extract in production builds.
          // This is necessary because create-react-app guards against external imports.
          // See https://sandroroth.com/blog/vanilla-extract-cra#production-build.
          if (plugin instanceof ModuleScopePlugin) {
            plugin.allowedPaths.push(path.join(__dirname, 'node_modules/@vanilla-extract/webpack-plugin'))
          }

          return plugin
        }),
        // Webpack 5 does not resolve node modules, so we do so for those necessary:
        fallback: {
          // - react-markdown requires path
          path: require.resolve('path-browserify'),
          fs: false,
          https: false,
          http: false,
        },
        unsafeCache: true,
        symlinks: false, // Disable symlink resolution for faster builds
      })

      // Retain source maps for node_modules packages:
      webpackConfig.module.rules[0] = {
        ...webpackConfig.module.rules[0],
        exclude: /node_modules/,
      }

      // Configure webpack transpilation (create-react-app specifies transpilation rules in a oneOf):
      webpackConfig.module.rules[1].oneOf = webpackConfig.module.rules[1].oneOf.map((rule) => {
        if (rule.loader && rule.loader.match(/babel-loader/)) {
          const { loader, options, ...rest } = rule // Remove both loader and options
          return {
            ...rest,
            use: [
              {
                loader: 'thread-loader',
                options: {
                  workers: 4,
                  workerParallelJobs: 50,
                  poolTimeout: isProduction ? 500 : 2000,
                },
              },
              {
                loader: 'swc-loader',
              },
            ],
          }
        }
        return rule
      })

      // Run terser compression on node_modules before tree-shaking, so that tree-shaking is more effective.
      // This works by eliminating dead code, so that webpack can identify unused imports and tree-shake them;
      // it is only necessary for node_modules - it is done through linting for our own source code -
      // see https://medium.com/engineering-housing/dead-code-elimination-and-tree-shaking-at-housing-part-1-307a94b30f23#7e03:
      webpackConfig.module.rules.push({
        enforce: 'post',
        test: /node_modules.*\.(js)$/,
        loader: path.join(__dirname, 'scripts/terser-loader.js'),
        options: { compress: true, mangle: false },
      })

      // Add cache groups for better chunk splitting
      webpackConfig.optimization = Object.assign(
        webpackConfig.optimization,
        isProduction
          ? {
              splitChunks: {
                chunks: 'all',
                maxSize: 5 * 1024 * 1024,
                cacheGroups: {
                  vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendor',
                    chunks: 'all',
                  },
                },
              },
              runtimeChunk: 'single',
            }
          : {}
      )

      // Configure webpack optimization:
      webpackConfig.optimization = Object.assign(
        webpackConfig.optimization,
        isProduction
          ? {
              splitChunks: {
                // Cap the chunk size to 5MB.
                // react-scripts suggests a chunk size under 1MB after gzip, but we can only measure maxSize before gzip.
                // react-scripts also caps cacheable chunks at 5MB, which gzips to below 1MB, so we cap chunk size there.
                // See https://github.com/facebook/create-react-app/blob/d960b9e/packages/react-scripts/config/webpack.config.js#L713-L716.
                maxSize: 5 * 1024 * 1024,
                // Optimize over all chunks, instead of async chunks (the default), so that initial chunks are also optimized.
                chunks: 'all',
              },
            }
          : {}
      )

      // Configure webpack resolution. webpackConfig.cache is unused with swc-loader, but the resolver can still cache:
      webpackConfig.resolve = Object.assign(webpackConfig.resolve, { unsafeCache: true })

      return webpackConfig
    },
  },
  plugins: [
    {
      plugin: CracoEsbuildPlugin,
      options: {
        esbuildMinimizerOptions: {
          target: 'es2020',
          css: true,
        },
        esbuildLoaderOptions: {
          loader: 'tsx',
          target: 'es2020',
          jsxFactory: 'React.createElement',
          jsxFragment: 'React.Fragment',
        },
        skipEsbuildJest: true, // Disable esbuild for Jest
      },
    },
  ],
}
