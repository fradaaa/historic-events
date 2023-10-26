const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const lightningcss = require("lightningcss");
const browserslist = require("browserslist");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ReactRefreshPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");

const isDevelopment = process.env.NODE_ENV !== "production";

module.exports = {
  entry: "./src/index.tsx",
  mode: isDevelopment ? "development" : "production",
  output: {
    path: path.resolve(__dirname, "build/"),
    filename: "main.js",
  },
  resolve: {
    extensions: [".js", ".ts", ".tsx"],
  },
  devtool: isDevelopment ? "eval-source-map" : false,
  module: {
    rules: [
      {
        test: /\.[jt]sx?$/,
        include: path.join(__dirname, "src"),
        use: [
          {
            loader: "swc-loader",
            options: {
              env: { mode: "usage" },
              jsc: {
                parser: {
                  syntax: "typescript",
                  tsx: true,
                  dynamicImport: true,
                },
                transform: {
                  react: {
                    runtime: "automatic",
                    refresh: isDevelopment,
                  },
                },
              },
            },
          },
        ],
      },
      {
        test: /.s?css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
  devServer: {
    open: true,
    port: 3000,
    static: "./public",
  },
  plugins: [
    isDevelopment && new ReactRefreshPlugin(),
    new ForkTsCheckerWebpackPlugin(),
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      favicon: "./public/favicon.ico",
    }),
  ].filter(Boolean),
  optimization: {
    minimizer: [
      new CssMinimizerPlugin({
        minify: CssMinimizerPlugin.lightningCssMinify,
        minimizerOptions: {
          targets: lightningcss.browserslistToTargets(browserslist(">= 0.25%")),
        },
      }),
    ],
  },
};
