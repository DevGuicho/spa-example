const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
/** @type {import('webpack').Configuration} */

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js'
  },
  resolve: {
    extensions: ['.js'],
    alias: {
      '@utils': path.resolve(__dirname, 'src/utils'),
      '@templates': path.resolve(__dirname, 'src/templates'),
      '@styles': path.resolve(__dirname, 'src/styles'),
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@routes': path.resolve(__dirname, 'src/routes')
    }
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: './public/index.html',
      filename: './index.html'
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: './src/styles/styles.css',
          to: ''
        }
      ]
    })
  ],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    historyApiFallback: true,
    port: 3000
  }
}
