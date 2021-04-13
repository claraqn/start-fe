// console.log(window.outerWidth);
// console.log(window.name);
// console.log(window.opener);

// history.back();
// history.forward();

// screen.width();

// navigator.userAgent();

// var a = document.getElementById('debug');
// console.log(a);

// var b = document.querySelector('.box');
// var c = document.querySelectorAll('.box');
// var d = document.querySelector('#debug');
// console.log(b);
// console.log(c);
// console.log(d);

// // 생성 방법 2개
// var div = document.createElement('div');
// div.style.border = '1px solid #000';
// div.innerHTML = 'Hello';
// console.log(div);

// var div2=document.body.appendChild(div);
// console.log(div2);

// const span = document.createElement('span');
// const textNode = document.createTextNode('hello!');
// span.appendChild(textNode);
// document.querySelector('#debug').appendChild(span);

// var debug = document.getElementById('debug');
// debug.remove();

// const list = document.getElementById('list');
// list.removeChild(list.children[0]);

// document.body.addEventListener('click', function(){ // body영역을 클릭하면 'click' 출력
//     console.log('click');
// });

// function clickBody(){
//     console.log('click');
// }

// document.querySelector('.box').addEventListener('click', clickBody);

// var clickCount = 0;
// function popup(event){
//     console.log(++clickCount);
//     console.log(arguments, event ,event.type,event.currentTarget);
// }
// document.body.addEventListener('click', popup);

// var list = document.querySelector('#list');
// console.log(list.children);

// for(var i=0; i<list.children.lengh; i++){
//     console.log(list.childern[i]);
//     list.children[i].addEventListener('click', function(){
//         console.log(1);
//     });
// }

// var app = document.getElementById("list");

// app.addEventListener("click", function(event) {
//     if(event.target.nodeName == "LI"){
//         //한개의 event리스너로 모든 li에 click이벤트 등록과 비슷
//         console.log(2);
//         event.stopPropagation(); // li 만 출력되겐
//     }
// });

// document.body.addEventListener('click', function(){
//     console.log('body');
// });

const link = document.querySelector('#link');
link.addEventListener('click', () => {
  // eslint-disable-next-line no-console
  console.log(1111111);
  // event.stopPropagation();
  // eslint-disable-next-line no-restricted-globals
  event.preventDefault(); // 페이지 이동하지 않음
});
