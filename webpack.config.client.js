const path = require("path")

module.exports = {
  mode: "development",
  entry: path.resolve(__dirname, "./src/index.tsx"),
  resolve: {
    extensions: [".json", ".tsx", ".ts", ".js"],
  },
  target: "web",
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
          },
        ],
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, "./public"),
    filename: "bundle.js",
  },
}
