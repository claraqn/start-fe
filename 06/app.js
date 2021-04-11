// let a = 'aa';
// const b = 'bb';
// // b="1"; //값 바뀌지 않음!(오류남)
// console.log(b);


// function sum(x,y=1){
//     return x+y;
// }

// console.log(sum(1));

// const arr = [1,2,3];
// // // const newArr = arr.map(function(item){
// // //     return item+1;
// // // }); // 밑에거랑 same
// const newArr = arr.map((item)=>item+1);
// console.log(newArr);

// document   
//     .getElementById('box')
//     .addEventListener('click', (event) => console.log(1));

// function sum(x,y,z){
//     return x+y+z;
// }

// const numbers=[1,2,3];
// console.log(sum(...numbers)); //6
// console.log(sum(1,2,3)); //6

// const words = ['a', 'b'];
// const newWords = [...words];
// console.log(newWords); // ["a","b"]
// console.log(words);

// const obj = {
//     a: 1,
//     b: 2,
// };

// const newObj = { ...obj };

// console.log(newObj); //{a: 1, b: 2}

// //es5
// var team = obj.team;
// var area = obj.area;

// var col1 = cols[0];
// var col2 = cols[1];

// //es6
// const { team, area } = obj;
// const [col1, col2] = cols;
// const [, cols2] = cols;

// // es5
// function getArea(options) {
//   return options.width * options.height;
// }

// // es6
// function getArea({ width, height }) {
//   return width * height;
// }

// const number = 1234;
// const name = 'hello';

// const student = {
//   // number: number
//   number,
//   name,
// };


// const student = {
//   number,
//   // playGame:function(){
//   // },
//   playGame() {
//     console.log('play');
//   },
// };


// var promise1 = new Promise(function(resolve, reject) {
//     setTimeout(function() {
//       resolve('foo');
//     }, 300);
//   });

// const cp = 'ssully';
// const url = `https://1boon.kakao.com/${cp}`;
// console.log(url);
let arr = ["Bora", "Lee"]

let [firstName, surname] = arr;

alert(firstName); // Bora

alert(surname); // Lee