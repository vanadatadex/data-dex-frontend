const webpack = require("webpack");

module.exports = function override(config, env) {
  // Add fallbacks for Node.js polyfills
  config.resolve.fallback = {
    ...config.resolve.fallback,
    "path": require.resolve("path-browserify"),
    "crypto": require.resolve("crypto-browserify"),
    "stream": require.resolve("stream-browserify"),
    "assert": require.resolve("assert"),
    "http": require.resolve("stream-http"),
    "https": require.resolve("https-browserify"),
    "os": require.resolve("os-browserify/browser"),
    "url": require.resolve("url"),
    "zlib": require.resolve("browserify-zlib"),
    "querystring": require.resolve("querystring-es3"),
    "util": require.resolve("util"),
    "buffer": require.resolve("buffer"),
    "process": require.resolve("process/browser"),
    "fs": false
  };
  
  // Add webpack plugins
  config.plugins.push(
    new webpack.ProvidePlugin({
      process: "process/browser",
      Buffer: ["buffer", "Buffer"],
    })
  );
  
  return config;
};
