const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry: path.resolve(__dirname, '../src/index.js'),
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '../dist'),
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: path.resolve(__dirname, '../src/index.html'),
      minify: 'auto',
    }),
  ],
  module: {
    rules: [
      //HTML
      {
        test: /\.html$/i,
        use: ['html-loader'],
      },
    ],
  },
};
