const path = require('node:path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
        {
            test: /\.html$/,
            use: ['html-loader']
        }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
        index: 'index.html',
        title: 'Relogio digital',        
        template: './public/index.html'
    })
  ],
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
};
