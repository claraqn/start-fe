/* eslint-disable no-use-before-define */
addred();
addbtn();
deletebtn();
resetbtn();
togglebtn();
imagebtn();
textbtn();

function addred() {
  const addRed = document.querySelector('.add-red');
  addRed.addEventListener('click', () => {
    const box = document.querySelectorAll('.box');
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < box.length; i++) {
      box[i].classList.add('red');
    }
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
    for (let i = 0; i < box.length; i++) {
      box[i].remove();
    }
  });
}

function textbtn() {
  const textBtn = document.querySelector('.text-btn');
  const text = document.querySelector('.txt');
  textBtn.addEventListener('click', () => {
    const box = document.querySelectorAll('.box');
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < box.length; i++) {
      box[i].innerText = text.value;
    }
  });
}

function togglebtn() {
  const toggleBtn = document.querySelector('.toggle-btn');
  toggleBtn.addEventListener('click', () => {
    const box = document.querySelectorAll('.box');
    if (box[0].style.visibility === 'visible') {
      // 3개 써주는것이 좋음!(값,문자형 다 같은 것)
      // eslint-disable-next-line no-plusplus
      for (let i = 0; i < box.length; i++) {
        box[i].style.visibility = 'hidden';
      }
    } else {
      // eslint-disable-next-line no-plusplus
      for (let i = 0; i < box.length; i++) {
        box[i].style.visibility = 'visible';
      }
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
