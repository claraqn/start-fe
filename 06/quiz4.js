const $box = document.querySelector('#box');
let x = 0;
let y = 0;
let isDown = false;


$box.addEventListener('mousedown', (event)=>{
    isDown = true;
    // 박스의 클릭한 좌표에서 움직여지는 코드
    x=$box.offsetLeft - event.clientX; // 사용자가 클릭한 위치좌표 전체길이에서 box왼쪽끝까지 닿는 부분까지의 길이 삭제
    y=$box.offsetTop - event.clientY;
});
document.body.addEventListener('mousemove', (event)=>{ // body안에서 box 자유롭게 움직임
    // if문안에 true 일때 return 실행, flase일때 return 말고 밑에 코드 진행
    if(!isDown) return; 
    //event.clientX -> 사용자가 선택한 좌표 X값
    //event.clientY -> 사용자가 선택한 좌표 Y값
    //$box.style.left,top 통해 박스를 이동시켜줌
    // $box.style.left = event.clientX-50; // 50을 빼주는 이유:마우스 박스 중앙에 오게 하기
    // $box.style.top = event.clientY-50;
    $box.style.left = event.clientX+x; 
    $box.style.top = event.clientY+y;
    console.log(event.clientX, event.clientY)

});
$box.addEventListener('mouseup', (event)=>{
    isDown = false;

});

  
  