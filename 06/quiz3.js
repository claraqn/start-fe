// addred()
// addbtn()
// deletebtn()
// resetbtn()
// togglebtn()
// imagebtn()
// textbtn()

// function addred(){
//     const add_red = document.querySelector('.add-red');
//     add_red.addEventListener('click',function(){
//         const box = document.querySelectorAll('.box');
//         for(i=0; i<box.length; i++){
//             box[i].classList.add('red');
//         }
//     });
// }

// function addbtn(){
//     const add_btn = document.querySelector('.add-btn');
//     add_btn.addEventListener('click', function(){
//         const div = document.createElement('div');
//         div.classList.add('box');
//         document.body.appendChild(div);
//     });
// }

// function deletebtn(){
//     const delete_btn = document.querySelector('.delete-btn');
//     delete_btn.addEventListener('click', function(){
//         const box = document.querySelector('.box');
//         box.remove();
//     });
// }

// function resetbtn(){
//     const reset_btn = document.querySelector('.reset-btn');
//     reset_btn.addEventListener('click', function(){
//         const box = document.querySelectorAll('.box'); // box = nodelistof = 배열이라는 뜻
//         for(i=0; i<box.length; i++){
//             box[i].remove();
//         }
//     });
// }

// function textbtn(){
//     const text_btn = document.querySelector('.text-btn');
//     const text = document.querySelector('.txt');
//     text_btn.addEventListener('click', function(){
//         const box = document.querySelectorAll('.box');
//         for(i=0; i<box.length; i++){
//             box[i].innerText=text.value;
//         }
//     });
// }

// function togglebtn(){
//     const toggle_btn = document.querySelector('.toggle-btn');
//     toggle_btn.addEventListener('click', function(){
//         const box = document.querySelectorAll('.box');
//         if(box[0].style.visibility === 'visible'){ // 3개 써주는것이 좋음!(값,문자형 다 같은 것)
//             for(i=0; i<box.length; i++){
//                 box[i].style.visibility = 'hidden';
//             }
//         }
//         else{
//             for(i=0; i<box.length; i++){
//                 box[i].style.visibility = 'visible';
//             }
//         }
        
//     });
// }

// function imagebtn(){
//     const image_btn = document.querySelector('.image-btn');
//     image_btn.addEventListener('click', function(){
//         const box = document.querySelector('.box');
//         const img = document.createElement('img');
//         img.src = "https://i.imgur.com/69NjYBH.png";
//         box.appendChild(img);
//     });
// }


const $addRed=document.querySelector(".add-red");
const $addBtn=document.querySelector(".add-btn");
const $deleteBtn=document.querySelector(".delete-btn");
const $textBtn=document.querySelector(".text-btn");
const $text=document.querySelector(".txt");
const $resetBtn=document.querySelector(".reset-btn");
const $toggleBtn=document.querySelector(".toggle-btn");
const $imageBtn=document.querySelector(".image-btn");

const boxString=".box";
var isOpacity=false;


function addRed(){
    $addRed.addEventListener("click",event=>{
        boxs=document.querySelectorAll(boxString);
        for(var i=0; i<boxs.length;i++){
            boxs[i].className="box red";
        }
    })
    
}

function addClick(){
    $addBtn.addEventListener("click",event=>{
        child=document.createElement('div');
        child.className="box";
        document.body.appendChild(child);
    })
    
}

function deleteClick(){
    $deleteBtn.addEventListener("click",event=>{
        document.querySelector(boxString).remove();
    })
    
}

function textChage(){
    $textBtn.addEventListener("click",event=>{
        var boxs=document.querySelectorAll(boxString);
        for(var i=0; i<boxs.length;i++){
            boxs[i].innerHTML=$text.value;
        }
    })
    
}

function resetClick(){
    $resetBtn.addEventListener("click",event=>{
    var boxs=document.querySelectorAll(boxString);
    for(var i=0; i<boxs.length;i++){
        boxs[i].remove();
    }
})
}
function opacityClick(){
    $toggleBtn.addEventListener("click",event=>{
        const $boxs=document.querySelectorAll(boxString);
        var opacity=null;
        if($boxs[0].style.opacity==''){
            $boxs[0].style.opacity=100;
        }
        opacity=($boxs[0].style.opacity==0) ? 100:0
        console.log(opacity);
        for(var i=0; i<$boxs.length;i++){
            $boxs[i].style.opacity=opacity;
        }
    })
    
}
function imageClick(){
    const img='<img src= https://i.imgur.com/69NjYBH.png>';
    $imageBtn.addEventListener("click",event=>{
        $box=document.querySelector(boxString);
        if($box==null){
            child=document.createElement('div');
            child.className="box";
            document.body.appendChild(child);  
            $box=child;
        }
        $box.innerHTML=img;
    })
}

addRed();
addClick();
deleteClick();
textChage();
resetClick();
opacityClick();
imageClick();