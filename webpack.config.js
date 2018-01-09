const path = require('path');

module.exports = {
  entry: './src/js/app.js',
  module: {
        loaders: [
            {
                test: /\.scss$/,
                loaders: [ 'style-loader', 'css-loader', 'sass-loader' ]
            }
        ]
    },
    output: {
      filename: '[name].js',
      path: path.resolve(__dirname, 'dist')
    },
    watch:true
};
