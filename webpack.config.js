module.exports = {
  entry: './src/main.js',
  output: {
    path: __dirname,
    publicPath: '/',
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
      contentBase: './',
      historyApiFallback: true,
      port: 3000
  }
};