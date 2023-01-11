/* eslint-disable global-require */
// const autoprefixer = require('autoprefixer');
const path = require('path');
// const { mainModule } = require('process');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        include: path.resolve(__dirname, 'src'),
        use: [
          'style-loader',
          {
            loader: 'css-loader', options: { importLoaders: 1 },
          },
          'postcss-loader',
        ],
      },
    ],
  },
  watch: true,
};
