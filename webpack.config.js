const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const loaders = [
  {
    test: /\.css$/,
    use: ["style-loader", "css-loader"],
  },
  {
    test: /\.s[ac]ss$/,
    use: ["style-loader", "css-loader", "sass-loader"],
  },
  // {
  //   test: /\.html$/i,
  //   loader: "raw-loader",
  // },
  // {
  //   test: /\.html$/i,
  //   loader: "html-loader",
  // },
];

const plugins = [
  new HtmlWebpackPlugin({
    title: "Anvio VR",
    filename: "index.html",
    template: "./src/index.html",
  }),
];

module.exports = {
  // --- I/O ---
  entry: {
    app: "./src/index.js",
    slider: "./src/scripts/singleSlider.js",
  },
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "[name].[contenthash].js",
    clean: true,
  },

  // --- main ---
  mode: "development",
  devtool: "inline-source-map",
  optimization: {
    runtimeChunk: "single",
  },

  // --- loaders & plugins ----
  module: {
    rules: loaders,
  },
  plugins: plugins,

  devServer: {
    static: {
      directory: "./dist",
    },
  },
};
