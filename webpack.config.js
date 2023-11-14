const path = require("path");

const CopyPlugin = require("copy-webpack-plugin");
const slsw = require("serverless-webpack");
const webpack = require("webpack");
const nodeExternals = require("webpack-node-externals");

module.exports = {
  mode: "development",
  entry: slsw.lib.entries,
  externals: [nodeExternals()],
  devtool: "source-map",
  resolve: {
    extensions: [".json", ".ts", ".tsx"],
    modules: [path.resolve(__dirname, "src"), "node_modules"],
  },
  output: {
    libraryTarget: "commonjs",
    path: path.join(__dirname, ".build"),
    filename: "[name].js",
  },
  target: "node",
  module: {
    rules: [
      {
        test: /\.(tsx?)$/,
        loader: "babel-loader",
        exclude: [
          [
            path.resolve(__dirname, "node_modules"),
            path.resolve(__dirname, ".build"),
          ],
        ],
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV),
      "process.env.NODE_CONFIG_ENV": JSON.stringify(
        process.env.NODE_CONFIG_ENV
      ),
    }),
    // new CopyPlugin({
    //   patterns: [{ from: "public", to: "public" }],
    // }),
  ],
};
