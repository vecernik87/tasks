/**
 * @author Pavel Cernik
 * @license MIT
 **/
console.log('webpack developer');
var webpack = require('webpack');
var Merge = require('webpack-merge');
var CommonConfig = require('./webpack.common.js');
//var ngAnnotatePlugin = require('ng-annotate-webpack-plugin');

module.exports = Merge(CommonConfig, {
    module: {
        loaders: [
        ],
    },
    plugins: [
    ]
})