import { render } from './html-rener';
import formInput from './form-input';
import './todos.css';

const $result = document.querySelector('#result');

// console.log($inputForm);
// console.log($input);
// console.log($result);

const todos = [
  {
    id: '1',
    text: 'JS공부',
    isDone: false,
  },
  {
    id: '2',
    text: 'Python공부',
    isDone: true,
  },
  {
    id: '3',
    text: 'Java공부',
    isDone: true,
  },
];

$result.addEventListener('click', (event) => {
  const { className } = event.target;
  console.log(event.target.className);
  if (className === 'delete') {
    console.log('delete');
    const { index } = event.target.parentElement.dataset;
    todos.splice(index, 1);
    render(todos);
    console.log(index);
  } else if (className === 'toggle-checked') {
    const { index } = event.target.parentElement.dataset;
    todos[index].isDone = !todos[index].isDone;
    render(todos);
  }
});

formInput.init(todos);
render(todos);
