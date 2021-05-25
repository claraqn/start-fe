import { render } from './html-rener';
import formInput from './form-input';
import './todos.css';
import { loadData } from './data-manager';

const $result = document.querySelector('#result');

// console.log($inputForm);
// console.log($input);
// console.log($result);
// loadData((todos) => {
//   $result.addEventListener('click', (event) => {
//     const { className } = event.target;
//     // console.log(event.target.className);
//     if (className === 'delete') {
//       // console.log('delete');
//       const { index } = event.target.parentElement.dataset;
//       todos.splice(index, 1);
//       render(todos);
//       // console.log(index);
//     } else if (className === 'toggle-checked') {
//       // const { index } = event.target.parentElement.dataset;
//       // todos[index].isDone = !todos[index].isDone;
//       // render(todos);
//     }
//   });

//   formInput.init(todos);
//   render(todos);
// });
const todos = loadData();

$result.addEventListener('click', (event) => {
  const { className } = event.target;
  // console.log(event.target.className);
  if (className === 'delete') {
    // console.log('delete');
    const { index } = event.target.parentElement.dataset;
    todos.splice(index, 1);
    render(todos);
    // console.log(index);
  } else if (className === 'toggle-checked') {
    const { index } = event.target.parentElement.dataset;
    todos[index].isDone = !todos[index].isDone;
    render(todos);
  }
});

formInput.init(todos);
render(todos);
