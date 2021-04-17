const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
  entry: path.resolve(__dirname, '../src/index.js'),
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '../dist'),
    assetModuleFilename: 'assets/[hash][ext]',
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: path.resolve(__dirname, '../src/index.html'),
      minify: 'auto',
    }),
    new MiniCSSExtractPlugin({ filename: 'css/index.css' }),
  ],
  module: {
    rules: [
      //HTML
      {
        test: /\.html$/i,
        use: ['html-loader'],
      },
      //JS
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      //CSS
      {
        test: /\.css$/,
        use: [MiniCSSExtractPlugin.loader, 'css-loader'],
      },
      //SASS
      {
        test: /\.s[ac]ss$/,
        use: [MiniCSSExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
      //IMAGES
      {
        test: /\.(png|jpg|gif|svg)$/,
        type: 'asset/resource',
        generator: {
          filename: `assets/images/[hash][ext]`,
        },
      },
      //FONTS
      {
        test: /\.(ttf|eot|woff|woff2)$/,
        type: 'asset/resource',
        generator: {
          filename: 'assets/fonts/[hash][ext]',
        },
      },
    ],
  },
};
