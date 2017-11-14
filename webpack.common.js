/**
 * Created by MHC-PC on 2017/11/14.
 */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports={
    entry:{
        main:path.join(__dirname,'entry/index.js')
    },
    output:{
        filename:'[name][hash].js',
        path:path.resolve(__dirname,'dist')
    },
    module:{
        rules:[
            {
                test:/\.js$/,
                use:{
                    loader:'babel-loader',
                    options:{
                        presets:[['es2015'],['react']],
                        plugins:[["import", { libraryName: "antd", style: "css" }] ]
                    }
                }
            },
            {
                test:/\.(scss|css)$/,
                loader:['style-loader','css-loader']
            },
            {
                test:/\.(jpg|png|gif)$/,
                loader:'file-loader'
            },
            {
                test:/\.(eot|svg|ttf|woff|woff2)$/,
                loader:'file-loader'
            }
        ]
    },
    resolve:{
        extensions:['*','.js','.css','.scss'],
        alias:{
            main:path.join(__dirname,'css/main'),
            font:path.join(__dirname,'fonts/font'),
            js:path.join(__dirname,'js')
        }
    },
    plugins:[
        new HtmlWebpackPlugin({
            title:'htmlTemplate'
            //filename:'index.html',
            //template:path.resolve(__dirname,'entry/index.html')
        }),
        new CleanWebpackPlugin(['dist'])
        //antd按需加载组件所需要的样式
        //["import",{libraryName:'antd',style:'css'}]
    ]
};