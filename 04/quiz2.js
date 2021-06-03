let $select = null;

function printBoards() {
    const $board = document.getElementById('board');
    const boardCount = 16;
    // iswhite = true 이면 흰,검 순서 바뀌어서 나옴
    let isWhite = false;
    let className = '';
    const boardLineCount = 4;
    let str = '';

    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < boardCount; i++) {
        className = isWhite ? 'black' : 'white';

        str += `<span class="${className}"></span>`;

        isWhite = !isWhite;

        if (i % boardLineCount === boardLineCount - 1) {
            // 0,1,2,3 이후 검흰 순서 바뀌는 것
            isWhite = !isWhite;
        }
    }
    $board.innerHTML = str;
}

function select(event) {
    // 다시 여기로 들어왔을 때 밑에 클래스가 추가된 el이 복사된 $select가 들어올것
    // 그 $select는 다른 사각형이 클릭되면 사라져야 하므로 if 문 안의 코드로 삭제시킴
    if ($select) {
        // 추가되었던 select 클래스를 공백으로 replace
        $select.className = $select.className.replace(' select', '');
    }
    const el = event.currentTarget;
    el.className += ' select';
    // select 클래스가 추가된 el 을 $select에 저장
    $select = el;
}

function addEvent() {
    const $boards = document.querySelectorAll('span');
    const boardsLength = $boards.length;
    // eslint-disable-next-line no-console
    console.log(boardsLength);
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < boardsLength; i++) {
        $boards[i].addEventListener('click', select);
    }
}

printBoards();
addEvent();
