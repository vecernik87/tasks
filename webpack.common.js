/**
 * @author Pavel Cernik
 * @license MIT
 **/
console.warn('webpack common');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var webpack = require('webpack');
var path = require('path');
module.exports = {

    entry: {
        tmpname: "./src/tmpname.js",
    }, //relative to root of the application
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'js/[name].bundle.js'
    },
    module: {
        loaders: [
            {
                test: /src.*\.js$/,
                use: [
                    {
                        loader: 'ng-annotate-loader',
                        options: {
                            add: true,
                        }
                    }
                ]
            },
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
                test: /\.(eot|woff|ttf|woff2)$/,
                loader: "file-loader?name=[name].[ext]&outputPath=font/"
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/,
                loader: "file-loader?name=[name].[ext]&outputPath=img/"
            },
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery",
            "window.$": "jquery"
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendors',
            minChunks: function(module){
                return containString(module, 'node_modules');
            }
        }),
        new CopyWebpackPlugin([
            {context: './src', from: 'icon/*'},
            {from: './src/service_worker.js', to: ''},
            {from: './src/manifest.json', to: ''},
            {from: './src/.htaccess', toType: 'file'},
        ]),
        new HtmlWebpackPlugin({
            hash: true,
            template: './src/index.html',
            filename: 'index.html'
        }),
        new ScriptExtHtmlWebpackPlugin({
            defaultAttribute: 'defer'
        })
    ]

}


function containString(module, string){
    var context = module.context;
    if(typeof context !== 'string'){
        return false;
    }

    return context.indexOf(string) !== -1;
}