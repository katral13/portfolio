var CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');

module.exports = {
    entry: './src/js/app.js',
    module: {
        loaders: [
          {
              test: /\.scss$/,
              loaders: ['style-loader', 'css-loader', 'sass-loader']
          },
          {
              test: /\.(png|jp(e*)g|svg)$/,
              loader: 'url-loader',
              options: { 
                  limit: 8000, // Convert images < 8kb to base64 strings
                  name: 'images/[hash]-[name].[ext]'
              }       
          }
        ],
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new CopyWebpackPlugin([ { from: 'src/static' } ])
    ],
    watch: true
};