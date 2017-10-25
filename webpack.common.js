console.warn('webpack common');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var webpack = require('webpack');
var path = require('path');
module.exports = {

    entry: {
//        vendor: "./src/vendor.js",
        tmpname: "./src/tmpname.js",
    }, //relative to root of the application
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: '[name].bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.scss$/,
                loader: 'style-loader!css-loader!sass-loader'
            },
            {
                test: /\.css$/,
                exclude: /skins/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.html$/,
                loader: 'html-loader'
            },
            {
                test: /\.(jpe?g|png|gif|svg|eot|woff|ttf|svg|woff2)$/,
                loader: "file-loader?name=[name].[ext]&outputPath=assets/"
            },
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendors',
            minChunks: function(module){
                return isExternal(module);
            }
        }),
        new CopyWebpackPlugin([
            {
                from: './src/.htaccess',
//                to: '.htaccess',
                toType: 'file'
            }
        ]),
        new HtmlWebpackPlugin({
            hash: true,
            template: './src/index.html',
            filename: 'index.html'
        })
    ]

}


function isExternal(module){
    var context = module.context;

    if(typeof context !== 'string'){
        return false;
    }

    return context.indexOf('node_modules') !== -1;
}