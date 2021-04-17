const { merge } = require('webpack-merge');
const commonConfiguration = require('./webpack.common');
module.exports = merge(commonConfiguration, {
  mode: 'production',
});
