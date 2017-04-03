const webpack = require('webpack');
const path = require('path');

const Html = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const sourcePath = path.join(__dirname, './src');
const staticsPath = path.join(__dirname, './dist');

module.exports = function (env) {
  const nodeEnv = env && env.prod ? 'production' : 'development';

  const plugins = [
    new Html({
      template: path.join(__dirname, './src/index.html')
    }),
    new ExtractTextPlugin("css/styles.css"),
    new webpack.HotModuleReplacementPlugin()
  ];

  return {
    devtool: 'eval',
    context: sourcePath,
    entry: {
      js: './index.js'
    },
    output: {
      path: staticsPath,
      filename: 'bundle.js'
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: [
            'babel-loader'
          ]
        },
        {
          test: /\.scss$/,
          loader: ExtractTextPlugin.extract({fallbackLoader: 'style-loader', loader: ['css-loader', 'sass-loader']})
        }
      ]
    },
    resolve: {
      extensions: ['.webpack-loader.js', '.web-loader.js', '.loader.js', '.js', '.jsx'],
      modules: [
        path.resolve(__dirname, 'node_modules'),
        sourcePath
      ]
    },

    plugins,

    devServer: {
      contentBase: './dist',
      port: 3000,
      hot: true
    }
  };
};
