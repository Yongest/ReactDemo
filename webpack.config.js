const path = require('path')

const HtmlWebPackPlugin = require('html-webpack-plugin')  //导入在内存中自动生成index页面插件

const htmlplugin = new HtmlWebPackPlugin({
    template:path.join(__dirname,'./src/index.html'),  //源文件
    filename:'index.html'  //在内存中首页的名称
})


// webpack是基于node构建的，所以webpack支持所有node api 跟语法
module.exports = {
    mode:'development',
    // webpack4.x 中有一个很大特性，默认打包入口为src ---> index.js

    plugins:[
        htmlplugin
    ],
    module:{  //模块的配置规则
        rules:[
            {test:/\.js|.jsx$/,use:'babel-loader',exclude:/node_modules/}   //排除node_modules
        ]
    },
    
    resolve:{
        extensions:['.js','.jsx','.json'],    //引入组件时，表示可以省略这几个后缀名
        alias:{
            '@':path.join(__dirname,'./src')  //这样，@ 就表示项目的跟目录
        }
    }

}

// 不行，因为这是es6语法，与之对应的是 import ** from ‘something’
// export default{}

// 哪些特性 node支持呢？ 如果Chrome浏览器支持，则nodejs支持