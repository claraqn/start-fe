// //create
// var todos = ['운동'];
// var todo = '게임';
// todos.push(todo);
// console.log(todos);

// //read
// todos.forEach(function(todo){
//     console.log(todo);
// });

// //update
// var todos = ['운동', '게임'];
// var updateTodo = '게임';
// var updateIndex = todos.findIndex(function(todo) {
//   return todo === updateTodo;
// });
// todos[updateIndex]='공부';
// console.log(todos);
// console.log(updateIndex);

// //delete
// var todos = ['운동', '공부', '목욕'];
// var deleteTodo = '공부';
// var deleteIndex = todos.findIndex(function(todo) {
//   return todo === deleteTodo;
// });
// todos.splice(deleteIndex, 1); //(a,b)->a부터 b개
// console.log(todos);

// // call by value
// var a = 1;
// var b = a;
// b = 2;
// console.log(a, b); // 1,2

// //참조타입->배열은 참조타입이기때문에 값 2개 다 바뀜
// var a = [1];
// var b = a;
// b[0] = [2];
// console.log(a, b); 

// //얘도 참조
// var a = { x: 1 };
// var b = a;
// b.x = 2;
// console.log(a, b);


// var isMan= true;
// if(isMan){
//     console.log('1')
// }
// else if(!isMan && isHero){

// }
// else{
//     console.log('2')
// }

// alert('안녕하세요');
// var a=1;
// if(a=1){
//     var who = prompt('당신은 누구세요');
//     console.log(who);
// }
// else{

// }

// var isDelete=confirm('정말 삭제?');
// console.log(isDelete);

// var nick = 'aji'; //전역변수

// function test() {
//   var age = 30; //지역변수
//   console.log(nick, age);
// }

// test();
// console.log(age);//age 못가져옴(지역변수니까)

// function sum(a,b){
//     return a+b;
// }
// console.log(sum(1,2));

//// 익명 함수표현식
// var car = function() {
//     //코드
//   };
  
//   //중첩함수
  
//   // 익명 즉시실행함수, 스코프 보호
//   (function() {
//     //코드
//   })();

// function sum(x, y) {
//     if (!y) y = 1;
//     console.log(x + y);
//   }
//   sum(3);

// function test(x, y) {}
// console.log(test.length); //함수가 전달받기 기대하는 인자갯수

// //직접 정의도 가능
// test.count = 1; //static

// test.prototype; //prototype객체를 가르킴

// var text = 'abc def ghi jkl abc def'; // 대상 문자열
// var testReg = /abc/; // 찾을 문자열
// var result = testReg.test(text);

// console.log(result); // true


// var count = [10,20,30,40,50,60,70,100];
// var counts=0;
// for(var a=0; a<count.length; a++){
//     counts+=count[a];
// }
// var average=counts/count.length;
// console.log(average);

// for(var a=1; a<10; a++){
//     for(var b=1; b<10; b++){
//         console.log(a+'*'+b+'='+a*b)
//     }
// }

// var mul=function(a,b){
//     return a*b;
// }

// for(var a=1; a<10; a++){
//     for(var b=1; b<10; b++){
//         console.log(a+'*'+b+'='+mul(a,b))
//     }
// }

// var student = {
//     studying: function() { //메소드임(함수가 객체에 붙어있으면 메소드)
//       console.log('studying..');
//     },
//   };
  
//   student.studying();


// var nums = new Array(); 
// do { 
//     input = prompt("숫자 입력"); 
//     nums.push(input); 
// } while (input != null); 
// nums.pop(); // 마지막꺼 제거 취소 버튼 누르면서 null값이 들어감 


// function sum(array){
//     var sum = 0;
//     for (var i=0; i<array.length; i++) { 
//         sum+=array[i];
//     }
//     return sum;
// }

// console.log(sum(nums));

function sum() {

    var numbers = new Array();
  
    while (true) {
  
      var value = prompt("숫자를 입력해 주세요.");
  
      // 입력받는 것 stop
      if (value === null) break;
  
      numbers.push(parseInt(value));
    }
  
    var sum = 0;
    for (var number of numbers) {
      sum += number;
    }
    return sum;
}
  
alert( sum() );