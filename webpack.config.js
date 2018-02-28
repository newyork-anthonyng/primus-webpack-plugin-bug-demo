const path = require("path");
const HTMLPlugin = require('html-webpack-plugin')
const PrimusWebpackPlugin = require('primus-webpack-plugin')

module.exports = {
  entry: "./app.js",

  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "static/"
  },

  plugins: [
    new PrimusWebpackPlugin(),
    new HTMLPlugin()
  ]
};
