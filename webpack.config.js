const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const path = require('path');

module.exports = {
    entry: './src/js/app.js',
    module: {
        rules: [
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
          },
          {
            test: /\.scss$/,
            use: ExtractTextPlugin.extract({
              fallback: "style-loader",
              use: ['css-loader', 'sass-loader']
            })
          }
        ]        
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new CopyWebpackPlugin([ { from: 'src/static' } ]),
        new ExtractTextPlugin("styles.css")
    ],
    watch: true
};