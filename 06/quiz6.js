// const num = document.querySelector('#num');
// const btn = document.querySelector('#btn');
// const result = document.querySelector('#result');

// function multi(){
//     const f_num = parseInt(num.value);
//     //f_result을 전역으로 빼면 구구단이 초기화되지 않고 계속 추가됨
//     const f_result = [];
//     if(isNaN(f_num)){
//         alert('숫자를 입력해주세요');
//         return;
//     }
//     console.log(f_num);
//     for(let i = 1; i<=9; i++){
//         f_result.push(`${f_num} X ${i} = ${f_num*i}`);
//         //따옴표가 아니라 backtick(``)
//         console.log(f_result);
//     }
//     //이거는 innerText 쓰면 <br>이 그대로 나옴
//     result.innerHTML = f_result.join('<br>');
// }

// //함수 적어주는 부분 () 들어가면 안됨
// btn.addEventListener('click', multi);

/// ////////////////////////////////////////////////////

const num = document.querySelector('#num');
const btn = document.querySelector('#btn');
const result = document.querySelector('#result');

function multi() {
  // parseInt 두번째 인자에 10진수라는 뜻의 10을 적어주어야 함
  const fNum = parseInt(num.value, 10);
  // testresult를 전역으로 빼면 구구단이 초기화되지 않고 계속 추가됨
  // const testresult = [];
  // let은 변수에 재할당이 가능하지만,const는 변수 재선언, 재할당 모두 불가능하다.
  // testresult 은 concat 사용을 const 로 선언하면 안됨 let 사용
  let testresult = [];
  // Number.isNaN 을 적어주어야 오류 안남
  if (Number.isNaN(fNum)) {
    // eslint-disable-next-line no-alert
    alert('숫자를 입력해주세요');
    return;
  }
  // eslint-disable-next-line no-console
  console.log(fNum);
  // eslint-disable-next-line no-plusplus
  for (let i = 1; i <= 9; i++) {
    testresult = testresult.concat(`${fNum} X ${i} = ${fNum * i}`);
    // 따옴표가 아니라 backtick(``)
    // eslint-disable-next-line no-console
    console.log(testresult);
  }
  // eslint-disable-next-line no-console
  console.log(testresult);
  // 이거는 innerText 쓰면 <br>이 그대로 나옴
  result.innerHTML = testresult.join('<br>');
}

// 함수 적어주는 부분 () 들어가면 안됨
btn.addEventListener('click', multi);
