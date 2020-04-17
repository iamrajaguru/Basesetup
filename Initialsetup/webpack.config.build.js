const path = require("path");
module.exports = {
  entry: {
    app: "./src/app/main/index",
  },
  output: {
    path: path.resolve(__dirname, "static/dist"),
    filename: "[name].bundle.js",
    publicPath: "/dist",
  },
  devtool: "source-map",
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"],
  },
  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: [{ loader: "ts-loader" }],
      },
      { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },
    ],
  },
  plugins: [],
};
