let path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
   entry: './js/script.js',
   output: {
      path: path.join(__dirname, 'dist'),
      filename: 'bundle.js',
      publicPath: './'
   },
   module:{
      rules:[
         {
            test: /\.css$/,
            use: ExtractTextPlugin.extract({
               use: [{
                  loader:'css-loader',
                  options:{
                     url:false}
               },
               {
                  loader:'postcss-loader'
               }]
            }),
         },
         {
            test: /\.(jpe?g|png|gif|svg)$/,
            use: [
               {
                  loader: 'url-loader',
                  options: {
                     limit: 40000,
                     outputPath: './images',
                     publicPath: './images'
                  }
               },
               'image-webpack-loader'
            ]
         },

      ]
   },
plugins: [
      new ExtractTextPlugin('css/main.css'),
      new HtmlWebpackPlugin({
         template: './index.html',
      })


   ]
   

}
