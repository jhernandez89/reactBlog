module.exports = {
  entry: './src/main.js',
  output: {
      filename: 'bundle.js'
  },
  module: {
      loaders: [
        {
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/
        }
      ]
  },
  devServer: {
      historyApiFallback: true,
      port: 3000
  }
};