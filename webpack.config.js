const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

process.noDeprecation = true;

module.exports = {
  entry: [
    './src/index.js'
  ],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'build.js'
  },
  module: {
    loaders: [{
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        presets: ['react', 'es2015', 'stage-1']
      }
    },
    {
      test: /\.scss$/,
      loader: ExtractTextPlugin.extract('css-loader!sass-loader!import-glob-loader'),
    },
    {
      loader: 'json-loader',
      test: /\.json$/,
    }]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  plugins:[
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
    }),
    new ExtractTextPlugin({
      filename: 'style/style.css',
      allChunks: false
    })
  ],
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  }
};
