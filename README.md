# ReactDemo
##ReactDemo,webpack4.x 学习。
###node -v:10.1.0 win7
###使用淘宝镜像   npm install cnpm -g

##webpack 使用
···
4.x 需要安装webpack && webpack-cli
1.终端运行webpack，报错。
WARNING in configuration
The 'mode' option has not been set, webpack will fallback to 'production' for this value. Set 'mode' option to 'development' or 'production' to enable defaults for each environment.
You can also set it to 'none' to disable any default behavior. Learn more: https://webpack.js.org/concepts/mode/
···

2.webpack是基于node构建的，所以webpack支持所有node api 

3.webpack4.x 中有一个很大特性，默认打包入口为src ---> index.js
4.webpack-dev-server  打包的文件在跟目录中，内存中。

5.(让index.html也可以在内存中，而不是在磁盘中)npm i html-webpack-plugin -D  报错。   npm WARN npm npm does not support Node.js v10.1.0 , npm Supported releases of Node.js are the latest release of 4, 6, 7, 8, 9.

6.使用插件报错  ，Invalid configuration object. Webpack has been initialised using a configuration object th
at does not match the API schema.
 - configuration has an unknown property 'plugin'. These properties are valid:

 7.装包 第一套：npm i babel-core babel-loader babel-plugin-transform-runtime -D
 第二套：npm i babel-preset-env babel-preset-stage-0 babel-preset-react -D


 8.再次运行 npm run dev 报错，Module build failed (from ./node_modules/babel-loader/lib/index.js):
Error: Cannot find module '@babel/core'
 babel-loader@8 requires Babel 7.x (the package '@babel/core'). If you'd like to use Babel 6.x ('babel-core'), you should install 'babel-loader@7'.

 