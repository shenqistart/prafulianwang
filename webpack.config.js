let HtmlWebpackPlugin=require("html-webpack-plugin");
module.exports={
  entry:"./src/index.js",
  output:{
    filename:"build.js",
    path:require("path").resolve("./dist")
  },
  module:{
    rules:[
      {test:/\.js$/,use:"babel-loader",exclude:/node_module/},
      {test:/\.css$/,use:["style-loader","css-loader"]},
      {test:/\.less$/,use:["style-loader","css-loader","less-loader"]},
      {test:/\.(jpg|png|gif)$/,use:"url-loader"}
    ]
  },
  devtool: "source-map",//源码映射，方便映射
  plugins:[
    new HtmlWebpackPlugin({
      template:"./index.html"
    })
  ]
};