const box = document.querySelector('#box');
const min = document.querySelector('#min');
const max = document.querySelector('#max');
const btn = document.querySelector('#btn');

let count = 0;
let randomNumber = 0;

function ranNum() {
    const fMin = parseInt(min.value, 10);
    const fMax = parseInt(max.value, 10);
    console.log(fMin);
    console.log(fMax);
    randomNumber = Math.floor(Math.random() * (fMax - fMin) + fMin);
}

function disNum() {
    if (count < randomNumber) {
        console.log(randomNumber);
        count += 1;
        box.innerHTML = count;
        btn.disabled = true;
    } else if (count > randomNumber) {
        console.log(randomNumber);
        count -= 1;
        box.innerHTML = count;
        btn.disabled = true;
    } else {
        // ranNum 함수가 실행되지 않는다고 가정하면 count===randomNumber 이니까 아무것도 실행되지 않음
        btn.disabled = false;
    }
}

console.log(randomNumber); // 이건 0이 나옴 밑에 함수 실행되기 전이므로
btn.addEventListener('click', ranNum);
setInterval(disNum, 10); // 1초동안 함수 끝날때까지 함수 계속 실행
// btn.addEventListener('click', ranNum);
// setInterval(disNum, 10);
// const box = document.getElementById('box');
// const min = document.getElementById('min');
// const max = document.getElementById('max');
// const btn = document.getElementById('btn');

// let randomValue = 0;
// let count = 0;

// function setNum(mini, maxi) {
//   const minimum = Math.ceil(mini);
//   const maximum = Math.floor(maxi);
//   randomValue = Math.floor(Math.random() * (maximum - minimum)) + minimum;
// }

// function showNum() {
//   if (count < randomValue) {
//     console.log(randomValue);
//     count += 1;
//     box.innerHTML = count;
//     btn.disabled = true;
//   } else if (count > randomValue) {
//     console.log(randomValue);
//     count -= 1;
//     box.innerHTML = count;
//     btn.disabled = true;
//   } else {
//     btn.disabled = false;
//   }
// }
// btn.addEventListener('click', () => setNum(min.value, max.value));
// setInterval(showNum, 1);
