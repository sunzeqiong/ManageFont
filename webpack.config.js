const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.jsx?$/, // 匹配以.js或.jsx结尾的文件
        exclude: /node_modules/, // 排除node_modules目录
        use: {
          loader: 'babel-loader', // 使用babel-loader进行转换
          options: {
            presets: ['@babel/preset-react'] // 使用React预设
          }
        }
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
  devServer: {
    historyApiFallback: true,
    hot: true,
    open: true,
    port: 3000,
  },
};