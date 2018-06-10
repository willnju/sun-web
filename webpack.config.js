var webpack = require('webpack');
var autoprefixer = require('autoprefixer');//自动修补css浏览器前缀
var proxy = require('http-proxy-middleware');
const context = [`/semantic/*`]
module.exports = {
    devtool: 'eval-source-map',//生成source map以追踪js错误
    entry:  __dirname + "/index.js",//js入口
    output: {
        path: __dirname + "/server",//输出路径
        filename: "bundle.js"//输出名
    },

    module:{
      loaders:[
          {
              test:/\.js$/,//js loader
              exclude:/node_modules/,
              loader:'babel',//更多配置在.babelrc
              query:{
                  plugins: [
                      ["import", { libraryName: "antd", style: "css" }] // `style: true` 会加载 less 文件
                  ]
              }
          },
          {
              test:/\.css$/,//css loader
              loader:'style!css?!postcss'
              // loader:'style!css?modules!postcss'//css模块化
          },
          {
              test: /\.(png|jpg|gif)$/,
              loader: 'url-loader'
          },
          {
              test: /\.scss$/,
              loader:'style!css!sass'
          }

      ],
    },

    devServer: {//webpack-dev-server 配置
        contentBase: "./server",
        colors: true,
        historyApiFallback: true,
        inline: true,
        hot:true,//热更新
        proxy: {
            '/semantic/*':{
                'target': 'http://172.26.7.135:8888/',
                'secure': false, // 接受 运行在 https 上的服务
                'changeOrigin': true,
            }
        }
    },
    postcss:[
        autoprefixer({browsers:['last 10 versions']})//postcss 插件
    ],

    plugins:[
        new webpack.BannerPlugin('Copyright Chvin'),//添加 js头
        new webpack.HotModuleReplacementPlugin(),//热更新
    ]
}