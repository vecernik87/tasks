console.log('webpack developer');
var webpack = require('webpack');
var Merge = require('webpack-merge');
var CommonConfig = require('./webpack.common.js');

module.exports = Merge(CommonConfig, {
// zatim nic nemame pro developery
})