const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const UglifyJsWebpackPlugin = require('uglifyjs-webpack-plugin');

module.exports=merge(common,{
    plugins:[
        new UglifyJsWebpackPlugin()
    ]
});