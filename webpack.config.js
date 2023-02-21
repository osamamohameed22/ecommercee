var path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: {
    app: "./src/index.js",
  },

  output: {
    path: path.join(__dirname, "/dist"),
    // publicPath: "",
    filename: "main.js",
    assetModuleFilename: 'images/[name].[ext]',
  },

  mode: "development",
  
  module: {
    rules: [
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
          },
        ],
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [{
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '../',
            }
          },
          'css-loader',
        ]
      },
      {
        test: /\.(png|jpe?g|gif)/,
        type: 'asset/resource'
      },
      // {
      //   test: /\.(png|jpe?g|gif)$/,
      //   use: [
      //     {
      //       loader: "file-loader",
      //       options: {
      //         name: "[name].[ext]",
      //         outputPath: "./images",
      //       },
      //     },
      //   ],
      // },
      {
        test: /\.(svg|eot|woff|woff2|ttf)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "fonts",
              esModule: false,
            },
          },
        ],
      },
      {
        test: require.resolve("jquery"),
        loader: "expose-loader",
        options: {
          exposes: ["$", "jQuery"],
        },
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./src/index.html",
    }),

    new HtmlWebpackPlugin({
      filename: "product.html",
      template: "./src/product.html",
    }),

    new HtmlWebpackPlugin({
      filename: "checkout.html",
      template: "./src/checkout.html",
    }),

    new HtmlWebpackPlugin({
      filename: "payment.html",
      template: "./src/payment.html",
    }),

    new MiniCssExtractPlugin({
      filename: "css/style.css"
    }),
  ],
};