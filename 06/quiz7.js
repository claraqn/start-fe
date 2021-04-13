const point = document.querySelector('#point');
const life = document.querySelector('#life');
const bug = document.querySelector('#bug');
const box = document.querySelector('.box');

let fPoint = 0; // 현재 가지고 있는 점수
let fLife = 10; // 현재 가지고 있는 생명
let timerId = 0; // 계속 바뀌어야하는 타이머 값

function random(value) {
  return Math.floor(Math.random() * value); // value 값이 최대인 랜덤값을 찍어줌
}

function show() {
  // box 안에서만 나오게 하는 함수
  bug.style.display = 'block';
  const X = random(box.offsetWidth - bug.offsetWidth); // box의 총 너비
  const Y = random(box.offsetHeight - bug.offsetHeight); // box의 총 높이
  // bug.offsetWidth 빼주는 이유 : bug 영역이 box 영역밖을 빠져나가서 보이지 않는 경우를 해결한 것

  bug.style.left = `${X}px`; // box 안에서 움직이는 bug의 랜덤 위치 X 값
  bug.style.top = `${Y}px`; // box 안에서 움직이는 bug의 랜덤 위치 Y 값
}

function start() {
  clearInterval(timerId); // 타이머를 clean 해줘야 증식되지 않음
  timerId = setInterval(show, 2000); // show라는 함수를 2초마다 실행시키는 것}
}

function clickbug(event) {
  fPoint += 1;
  point.innerHTML = fPoint;
  bug.style.display = 'none';
  start(); // click해서 box 사라지면 다시 start로 완전히 새로 시작

  // 이벤트 전파 중지 -> 다른 이벤트 전파되는 것 중지! (box 관련 이벤트 적용되지 않게 막은것)
  event.stopPropagation();
}

function clickbox() {
  fLife -= 1;
  life.innerHTML = fLife;
  if (fLife === 0) {
    // eslint-disable-next-line no-alert
    alert('gameover');
    // clear timerId를 통해 움직이는 bug를 멈춰줌(게임종료)
    clearInterval(timerId);
  }
}

bug.addEventListener('click', clickbug);
box.addEventListener('click', clickbox);

start();
