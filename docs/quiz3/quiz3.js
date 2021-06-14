function addred() {
    // addRed 를 전역변수로 빼주면 오류 -> 함수 호출 최상단에 했기 때문
    // DOM > 지역 변수로 써주는 게 좋은듯!
    const addRed = document.querySelector('.add-red');
    addRed.addEventListener('click', () => {
        const box = document.querySelectorAll('.box');
        // eslint-disable-next-line no-plusplus
        // for (let i = 0; i < box.length; i++) {
        //   box[i].classList.add('red');
        // }
        box.forEach((element) => {
            element.classList.add('red');
        });
    });
}

function addbtn() {
    const addBtn = document.querySelector('.add-btn');
    addBtn.addEventListener('click', () => {
        const div = document.createElement('div');
        div.classList.add('box');
        document.body.appendChild(div);
    });
}

function deletebtn() {
    const deleteBtn = document.querySelector('.delete-btn');
    deleteBtn.addEventListener('click', () => {
        const box = document.querySelector('.box');
        box.remove();
    });
}

function resetbtn() {
    const resetBtn = document.querySelector('.reset-btn');
    resetBtn.addEventListener('click', () => {
        const box = document.querySelectorAll('.box'); // box = nodelistof = 배열이라는 뜻
        // eslint-disable-next-line no-plusplus
        // for (let i = 0; i < box.length; i++) {
        //   box[i].remove();
        // }
        box.forEach((element) => {
            element.remove();
        });
    });
}

function textbtn() {
    const textBtn = document.querySelector('.text-btn');
    const text = document.querySelector('.txt');
    textBtn.addEventListener('click', () => {
        const box = document.querySelectorAll('.box');
        // eslint-disable-next-line no-plusplus
        // for (let i = 0; i < box.length; i++) {
        //   box[i].innerText = text.value;
        // }
        box.forEach((element) => {
            // eslint-disable-next-line no-param-reassign
            element.innerText = text.value;
        });
    });
}

function togglebtn() {
    const toggleBtn = document.querySelector('.toggle-btn');
    toggleBtn.addEventListener('click', () => {
        const box = document.querySelectorAll('.box');
        // if (box[0].style.visibility === 'visible') {
        //   // 3개 써주는것이 좋음!(값,문자형 다 같은 것)
        //   // eslint-disable-next-line no-plusplus
        //   // for (let i = 0; i < box.length; i++) {
        //   //   box[i].style.visibility = 'hidden';
        //   // }
        //   box.forEach((element) => {
        //     // eslint-disable-next-line no-param-reassign
        //     element.style.visibility = 'hidden';
        //   });
        // } else if (box[0].style.visibility === '') {
        //   // togglebtn 을 클릭했을 때 초기 1번 작동 안하는거 해결
        //   // 초기값 box[0].style.visibility -> null값임
        //   box.forEach((element) => {
        //     // eslint-disable-next-line no-param-reassign
        //     element.style.visibility = 'hidden';
        //   });
        // } else {
        //   // eslint-disable-next-line no-plusplus
        //   // for (let i = 0; i < box.length; i++) {
        //   //   box[i].style.visibility = 'visible';
        //   // }
        //   box.forEach((element) => {
        //     // eslint-disable-next-line no-param-reassign
        //     element.style.visibility = 'visible';
        //   });
        // }
        // 위 코드는 초기 null값인 것 한 번 처리해주기 위해 코드 추가함 -> 비효율
        // 밑 코드로 변경
        if (box[0].style.visibility === 'hidden') {
            box.forEach((element) => {
                // eslint-disable-next-line no-param-reassign
                element.style.visibility = 'visible';
            });
        } else {
            box.forEach((element) => {
                // eslint-disable-next-line no-param-reassign
                element.style.visibility = 'hidden';
            });
        }
    });
}

function imagebtn() {
    const imageBtn = document.querySelector('.image-btn');
    imageBtn.addEventListener('click', () => {
        const box = document.querySelector('.box');
        const img = document.createElement('img');
        img.src = 'https://i.imgur.com/69NjYBH.png';
        box.appendChild(img);
    });
}

/* eslint-disable no-use-before-define */
addred();
addbtn();
deletebtn();
resetbtn();
togglebtn();
imagebtn();
textbtn();
