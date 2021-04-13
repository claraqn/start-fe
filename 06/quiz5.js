const box = document.querySelector('.box');
const box1 = document.querySelector('.box1');

let x = 0;
let y = 0;
let isDown = false;
let el = '';

function mousedown(app) {
  app.addEventListener('mousedown', (event) => {
    isDown = true;
    // 박스가 2개 이므로 지정한 박스로 값을 넣어줘야 함.
    el = app;
    x = app.offsetLeft - event.clientX;
    y = app.offsetTop - event.clientY;
    // eslint-disable-next-line no-console
    console.log('mousedown');
  });
}

function mousemove() {
  document.addEventListener('mousemove', (event) => {
    if (!isDown) return;
    el.style.left = `${event.clientX + x}px`;
    // quiz4,js에서는 px 붙여주지 않아도 잘 작동했는데 왜 여기서는 'px'를 붙여주지 않으면 오류가 나는지?
    // 새로운 박스에 값을 주게 되는 경우에는 'px'라는 단위를 꼭 붙여주어야 작동됨!
    // JAVASCRIPT에서 특정 DOM객체의 CSS를 조정할 때, 'px'라는 문자를 안 붙여도 자동으로 처리가 됐지만
    // 아마도 이러한 'px'같은 단위를 확실히 붙여줘야만 할 것 같다.
    el.style.top = `${event.clientY + y}px`;
    // eslint-disable-next-line no-console
    console.log(event.clientX, event.clientY);
  });
}

function mouseup() {
  document.addEventListener('mouseup', () => {
    isDown = false;
    // eslint-disable-next-line no-console
    console.log('mouseup');
  });
}

mousedown(box);
mousedown(box1);
mousemove();
mouseup();

// $box.addEventListener('mousedown', (event)=>{
//     isDown = true;
//     // 박스의 클릭한 좌표에서 움직여지는 코드
//     x=$box.offsetLeft - event.clientX; // 사용자가 클릭한 위치좌표 전체길이에서 box왼쪽끝까지 닿는 부분까지의 길이 삭제
//     y=$box.offsetTop - event.clientY;
// });
// document.body.addEventListener('mousemove', (event)=>{ // body안에서 box 자유롭게 움직임
//     // if문안에 true 일때 return 실행, flase일때 return 말고 밑에 코드 진행
//     if(!isDown) return;
//     //event.clientX -> 사용자가 선택한 좌표 X값
//     //event.clientY -> 사용자가 선택한 좌표 Y값
//     //$box.style.left,top 통해 박스를 이동시켜줌
//     // $box.style.left = event.clientX-50; // 50을 빼주는 이유:마우스 박스 중앙에 오게 하기
//     // $box.style.top = event.clientY-50;
//     $box.style.left = event.clientX+x;
//     $box.style.top = event.clientY+y;
//     console.log(event.clientX, event.clientY)

// });
// $box.addEventListener('mouseup', (event)=>{
//     isDown = false;

// });
