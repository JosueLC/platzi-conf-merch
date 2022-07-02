const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const myHtmlWebpackPlugin = new HtmlWebpackPlugin({
  title: 'Platzi Merch',
  template: './public/index.html'
});

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.html$/,
        use: ['html-loader'],
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader,'css-loader'],
      },
    ],
  },
  plugins: [
    myHtmlWebpackPlugin,
    new MiniCssExtractPlugin(),
  ],
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'dist')
    },
    devMiddleware: {
      index: 'index.html',
    },
    compress: true,
    port: 3200,
    open: true,
    historyApiFallback: true,
  },
  mode: 'development',
};
