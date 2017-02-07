{
    'use strict';
   //  var path=require('path');
    const webpack = require("webpack");

    module.exports = {
        context: __dirname + "/",
        entry: [
            './src/app.js',
            'webpack/hot/dev-server',
            'webpack-dev-server/client?http://localhost:8080'
        ],
        plugin:[
            new webpack.HotModuleReplacementPlugin()
        ],
        output: {
            path : __dirname + "/dist",
            publicPath: '/dist/',
            filename: "[name].bundle.js"
        },  
    };
};