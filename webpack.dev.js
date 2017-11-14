/**
 * Created by MHC-PC on 2017/11/14.
 */
const merge = require('webpack-merge');
const webpack = require('webpack');
const common=require('./webpack.common.js');

module.exports=merge(common,{
    devServer:{
      contentBase:'./dist'
    },
    plugins:[
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ]
})