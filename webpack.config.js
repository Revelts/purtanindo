const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: "production",
  entry: {
    main: "./js/main.js",
    lang: "./js/lang.js", // Add lang.js here
    email: "./js/email.js", // Add email.js here
  },
  output: {
    filename: "js/[name].js", // Uses entry name (main.js, lang.js)
    path: path.resolve(__dirname, "dist"),
  },
  devtool: false, // ❌ Disables source maps (prevents viewing original code)
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              modules: {
                localIdentName: "[hash:base64]", // Obfuscates class names
              },
            },
          },
          "postcss-loader",
        ],
      },
    ],
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin(), new CssMinimizerPlugin()],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({ filename: "css/styles.min.css" }),
    new HtmlWebpackPlugin({
      template: "./index.html",
      filename: "index.html",
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true,
        minifyJS: true,  // ✅ Minifies inline JavaScript
        minifyCSS: true, // ✅ Minifies inline CSS
      },
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: "css", to: "css" },
        { from: "images", to: "images" },
        { from: "lib", to: "lib" },
        { from: "LICENSE", to: "LICENSE" },
        { from: "lang", to: "lang" },
      ],
    }),
  ],
};
