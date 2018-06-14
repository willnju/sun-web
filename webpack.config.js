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
              test: /\.less$/,
              loader: 'style!css!less'
          },
          {
              test:/\.css$/,//css loader
              loader:'style-loader!css-loader!postcss-loader'
              // loader:'style!css'//css模块化
          },
          {
              test: /\.(png|jpg|gif)$/,
              loader: 'url-loader'
          },
          {test: /\.(eot|ttf|svg)/,loader : 'file?prefix=font/'},
          // {test: /\.ttf/, loader : 'file?prefix=font/'},
          // {test: /\.svg/, loader : 'file?prefix=font/'},
          {test: /\.woff/,loader : 'file?prefix=font/&limit=10000&mimetype=application/font-woff'},
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
        port:8888,
        proxy: {
            '/web/*':{
                'target': 'http://172.26.39.240:8888/',
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