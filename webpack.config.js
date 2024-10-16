const path = require('path');

module.exports = {
  entry: './src/bin/epr.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'epr.js'
  },
  target: 'node',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src/'),
    }
  },
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: 'ts-loader',
        exclude: /node_modules|templates/,
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js'],
    alias: {
      '@': path.resolve(__dirname, 'src/'),
    }
  }
};