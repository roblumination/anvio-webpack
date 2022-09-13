const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ESLintPlugin = require("eslint-webpack-plugin");

const loaders = [
  // --- styles ---
  {
    test: /\.css$/,
    use: ["style-loader", "css-loader"],
  },
  {
    test: /\.s[ac]ss$/,
    use: [
      "style-loader",
      "css-loader",
      {
        loader: "sass-loader",
        options: {
          sourceMap: true,
          sassOptions: {
            outputStyle: "compressed",
          },
        },
      },
    ],
  },

  // --- typescript ---
  {
    test: /\.tsx?$/,
    use: "ts-loader",
    exclude: /node_modules/,
  },

  // --- html ---
  {
    test: /\.html$/i,
    loader: "html-loader",
  },
];

const plugins = [
  new HtmlWebpackPlugin({
    title: "Anvio VR",
    filename: "index.html",
    template: "./src/index.html",
  }),
  new ESLintPlugin(),
];

module.exports = {
  // --- I/O ---
  entry: {
    app: "./src/index.ts",
    modalControll: "./src/scripts/other/modalControl.ts",
    customAccord: "./src/scripts/other/customAccordion.ts",
    simpleSlider: "./src/scripts/other/singleSlider.ts",
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
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
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
