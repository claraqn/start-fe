import sum from './sum';

// console.log(sum(11, 2));

document.getElementById('debug').innerHTML = sum(100, 4);

// 숫자 바뀌면 npx webpack 해줘야함
// 번거로운 과정이기 때문에 package.json build 부분 바꿔주고
// npm run build 해서 적용시켜주고
// 터미널에서 npx webpack --watch 하면 변경될 때마다
// 값이 적용됨
// index.html 이 dist 파일 안에 들어가게 하기 위해서는
// npm install --save-dev html-webpack-plugin
// 그리고 webpack.config.js 에 const HtmlWebpackPlugin = require('html-webpack-plugin'); 추가

// alert(1, 2);
