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
      ...todoModel,
      text,
      isDone: false,
    });

    render(data);
  });
}

export default {
  init,
};
