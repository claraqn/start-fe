addred()
addbtn()
deletebtn()
resetbtn()
togglebtn()
imagebtn()
textbtn()

function addred(){
    const add_red = document.querySelector('.add-red');
    add_red.addEventListener('click',function(){
        const box = document.querySelectorAll('.box');
        for(i=0; i<box.length; i++){
            box[i].classList.add('red');
        }
    });
}

function addbtn(){
    const add_btn = document.querySelector('.add-btn');
    add_btn.addEventListener('click', function(){
        const div = document.createElement('div');
        div.classList.add('box');
        document.body.appendChild(div);
    });
}

function deletebtn(){
    const delete_btn = document.querySelector('.delete-btn');
    delete_btn.addEventListener('click', function(){
        const box = document.querySelector('.box');
        box.remove();
    });
}

function resetbtn(){
    const reset_btn = document.querySelector('.reset-btn');
    reset_btn.addEventListener('click', function(){
        const box = document.querySelectorAll('.box'); // box = nodelistof = 배열이라는 뜻
        for(i=0; i<box.length; i++){
            box[i].remove();
        }
    });
}

function textbtn(){
    const text_btn = document.querySelector('.text-btn');
    const text = document.querySelector('.txt');
    text_btn.addEventListener('click', function(){
        const box = document.querySelectorAll('.box');
        for(i=0; i<box.length; i++){
            box[i].innerText=text.value;
        }
    });
}

function togglebtn(){
    const toggle_btn = document.querySelector('.toggle-btn');
    toggle_btn.addEventListener('click', function(){
        const box = document.querySelectorAll('.box');
        if(box[0].style.visibility == 'visible'){
            for(i=0; i<box.length; i++){
                box[i].style.visibility = 'hidden';
            }
        }
        else{
            for(i=0; i<box.length; i++){
                box[i].style.visibility = 'visible';
            }
        }
        
    });
}

function imagebtn(){
    const image_btn = document.querySelector('.image-btn');
    image_btn.addEventListener('click', function(){
        const box = document.querySelector('.box');
        const img = document.createElement('img');
        img.src = "https://i.imgur.com/69NjYBH.png";
        box.appendChild(img);
    });
}