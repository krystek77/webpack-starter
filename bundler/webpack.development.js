const commonConfiguration = require('./webpack.common');
const { merge } = require('webpack-merge');
module.exports = merge(commonConfiguration, {
  mode: 'development',
  devServer: {
    host: '0.0.0.0',
    contentBase: './dist',
  },
});
