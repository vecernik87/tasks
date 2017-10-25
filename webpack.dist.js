console.log('webpack distribution');
var webpack = require('webpack');
var Merge = require('webpack-merge');
var CommonConfig = require('./webpack.common.js');
var ngAnnotatePlugin = require('ng-annotate-webpack-plugin');

module.exports = Merge(CommonConfig, {
    plugins: [
        new webpack.LoaderOptionsPlugin({
            minimize: true,
            debug: false
        }),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        new ngAnnotatePlugin({
            add: true,
            // other ng-annotate options here
        }),
        new webpack.optimize.UglifyJsPlugin({
            /*beautify: false,
             mangle: {
             screw_ie8: true,
             keep_fnames: true
             },
             compress: {
             screw_ie8: true
             },
             comments: false,*/
            output: {
                "ascii_only": true
            }
        })
    ]
})