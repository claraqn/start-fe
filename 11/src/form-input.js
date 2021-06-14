import todoModel from './todo-model';
import { render } from './html-rener';

const $inputForm = document.querySelector('#input-form');
const $input = document.querySelector('#input');

function init(data) {
  $inputForm.addEventListener('submit', (event) => {
    console.log(event);
    event.preventDefault(); // form이 넘어가지 않도록(reload되지 않도록)
    const text = $input.value;
    if (!text) return;
    console.log(text);
    $input.value = '';

    // data.push(Object.assign(todoModel,{
    //   text,
    //   isDone: false,
    // }));
    data.push({
      // startfe 의 향상된 객체 리터럴 파트
      ...todoModel, // todoModel에 있는 값을 복사해서 가져오고, 필요한 값(text, isDone)만 덮어씌우기
      text, // text(todoModel의 text) : text(init 함수의 text)
      isDone: false, // isDone(todoModel의 isDone) : isDone
    });

    render(data);
  });
}

export default {
  init,
  // init(data) 이렇게 x
  // 매개변수 적어주지 x
};
