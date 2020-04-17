const webpack = require("webpack");
const config = require("./webpack.config.build");

process.env.NODE_ENV = "production";

module.exports = {
  mode: process.env.NODE_ENV,
  entry: config.entry,
  externals: config.externals,
  output: config.output,
  optimization: config.optimization,
  plugins: [new webpack.optimize.OccurrenceOrderPlugin()],
  module: config.module,
  resolve: config.resolve,
};
