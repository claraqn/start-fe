// const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// module.exports = {
//   entry: './src/main.js',
//   output: {
//     filename: 'app.js',
//     // path: path.resolve(__dirname, 'dist'),
//     path: `${__dirname}/dist`,
//   },
//   devServer: {
//     contentBase: './dist',
//   },
//   plugins: [
//     new HtmlWebpackPlugin({
//       template: './src/index.html',
//     }),
//   ],
// };

module.exports = {
  mode: 'development',
  entry: './src/quiz.js',
  output: {
    filename: 'app2.js',
    // path: path.resolve(__dirname, 'dist'),
    path: `${__dirname}/dist`,
  },
  devServer: {
    contentBase: './dist',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/quiz.html',
    }),
  ],
};
