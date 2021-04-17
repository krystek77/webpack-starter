const commonConfiguration = require('./webpack.common');
const { merge } = require('webpack-merge');
const path = require('path');
module.exports = merge(commonConfiguration, {
  mode: 'development',
  devServer: {
    host: '0.0.0.0',
    contentBase: path.join(__dirname, 'dist'),
    after: function (app, server, compiler) {},
  },
});
