let path = require('path');

module.exports = {
   entry: './js/script.js',
   output: {
      path: path.join(__dirname, 'dist'),
      filename: 'bundle. [chunkhash].js',
      publicPath: './'
   }
}
