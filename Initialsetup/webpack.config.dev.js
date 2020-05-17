const webpack = require("webpack");
const path = require("path");
const config = require("./webpack.config.build");

process.env.NODE_ENV = "development";

module.exports = {
  mode: process.env.NODE_ENV,
  entry: config.entry,
  externals: config.externals,
  output: config.output,
  devtool: config.devtool,
  optimization: config.optimization,
  plugins: [new webpack.HotModuleReplacementPlugin()],
  module: config.module,
  devServer: {
    hot: true,
    open: true,
    port: 8080,
    proxy: {
      "**": {
        target: "http://localhost:3000/",
      },
    },
    overlay: {
      warning: true,
      errors: true,
    },
    contentBase: path.join(__dirname, "static"),

    historyApiFallback: true,
  },
  resolve: config.resolve,
};
