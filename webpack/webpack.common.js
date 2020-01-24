/* eslint-disable import/no-extraneous-dependencies */
const path = require("path");
// const config = require("config");
const webpack = require("webpack");
const autoprefixer = require("autoprefixer");
// const CleanWebpackPlugin = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const baseDirectory = path.resolve(__dirname, "..");
const nodeModulesDirectory = path.resolve(baseDirectory, "node_modules");
const srcDirectory = path.resolve(baseDirectory, "src");
const distDirectory = path.join(baseDirectory, "dist");

if (typeof process.env.NODE_ENV === "undefined") {
  process.env.NODE_ENV = "development";
}

module.exports = {
  entry: ["@babel/polyfill", path.join(srcDirectory, "index.jsx")],
  output: {
    path: distDirectory,
    filename: `bundle-${process.env.npm_package_version}.js`,
    publicPath: "/"
  },
  plugins: [
    // new webpack.DefinePlugin({
    //   NODE_ENV: JSON.stringify(process.env.NODE_ENV),
    //   // CONFIG: JSON.stringify(config),
    //   APP_VERSION: JSON.stringify(process.env.npm_package_version),
    //   DOCKER_IMAGE_ID: JSON.stringify(process.env.DOCKER_IMAGE_ID)
    // }),
    // new CleanWebpackPlugin(),
    // new HtmlWebpackPlugin({
    //   template: path.resolve(srcDirectory, "index.tpl.html"),
    //   title: "Convene Member Portal",
    //   inject: "body",
    //   filename: "index.html",
    //   context: srcDirectory,
    //   // zendeskWidgetUrl: config.zendesk.widgetUrl
    // }),
    new MiniCssExtractPlugin({
      filename:
        process.env.NODE_ENV === "development"
          ? "styles.css"
          : "styles.[contenthash].css"
    })
  ],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: srcDirectory,
        use: ["babel-loader"]
      },
      {
        test: /\.scss$/,
        include: srcDirectory,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: process.env.NODE_ENV === "development"
            }
          },
          {
            loader: "css-loader",
            options: {
              sourceMap: true,
              importLoaders: 2
            }
          },
          {
            loader: "postcss-loader",
            options: {
              sourceMap: true,
              plugins: () => [
                autoprefixer({
                  remove: false
                })
              ]
            }
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true
            }
          }
        ]
      },
      {
        test: /\.css$/,
        include: nodeModulesDirectory,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: process.env.NODE_ENV === "development"
            }
          },
          {
            loader: "css-loader"
          }
        ]
      },
      {
        test: /\.(otf|png|svg|jpg|jpeg|gif)$/,
        use: ["file-loader"]
      }
    ]
  },
  resolve: {
    extensions: [".js", ".jsx"]
  }
};
