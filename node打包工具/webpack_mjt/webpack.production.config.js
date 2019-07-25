//使用webpack配置文件
const webpack = require('webpack');
const path = require('path'); //path内置的模块，用来设置路径
const HtmlWebpackPlugin = require('html-webpack-plugin'); //自动生成html文件的插件
const CleanWebpackPlugin = require('clean-webpack-plugin'); //清除之前打包的文件   
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
    mode: 'development',
    entry: './src/js/entry.js', //入口文件
    output: { //输出配置
        filename: 'bundle-[hash].js', //输出文件名
        path: path.resolve(__dirname, 'dist'), //输出文件路径配置
    },
    module: {
        rules: [{
            test: /\.js$/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ["env"]
                }
            },
            exclude: /node_modules/
        },{
            test: /\.css$/,
            use: [
                'style-loader',
                {
                    loader: "css-loader",
                    options: {
                        modules: true, // 指定启用css modules
                        // localIdentName: '[name]__[local]--[hash:base64:5]' // 1).指定css的类名格式
                    }
                },
                {
                    loader: "postcss-loader" //2).css会自动根据Can i use里的数据添加不同前缀
                }
                //注：1)和2)是一样的效果，相同的类名也不会造成不同组件之间的污染
            ]
        }, {
            test: /\.(png|jpg|gif)$/,
            use: [{
                loader: 'url-loader',
                options: {
                    limit: 8192
                }
            }]
        }]
    },
    //自动编译打包,利用webpack开发服务器工具: webpack-dev-server
    devServer: {
        contentBase: './dist',
        hot: true
    },
    plugins: [
        new HtmlWebpackPlugin({ template: 'index.html' }),
        new CleanWebpackPlugin(),
        new webpack.HotModuleReplacementPlugin(), //热加载插件
        new webpack.optimize.OccurrenceOrderPlugin(),
        new ExtractTextPlugin("style.css")
    ],
    optimization: {
        minimizer: [
            new UglifyJsPlugin(),
        ]
    }
}