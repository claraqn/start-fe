// import Header from './Header';
// import React, { useState } from 'react';

// function App() {
//   const [countNumber, setCountNumber] = useState(0);

//   function addCountNumber() {
//     setCountNumber(countNumber + 1);
//   }

//   return (
//     <div className="App">
//       <Header />
//       eslint 버전 오류 나면 .env 파일 만들어서 SKIP_PREFLIGHT_CHECK=true 추가!
//       <div>{countNumber}</div>
//       <button onClick={addCountNumber}>플러스</button>
//     </div>
//   );
// }

// export default App;

import Header from './Header';
import React, { useState } from 'react';

function App() {
  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState([]);

  function handleChange(event) {
    setTodo(event.target.value);
    // event.target.value 는 타자하나 칠때마다 값이 바뀜
  }
  function hanldeSubmit(event) {
    event.preventDefault();
    // newTodos = todos 를 쓰면 안돼서 복제한 것
    // setTodos(.push ) 이런식으로 할 수 없어서,,,
    const newTodos = [...todos];
    newTodos.push(todo);
    setTodos(newTodos);
    // 위 세 줄은 하나의 세트라고 보면 됨

    setTodo('');
  }

  console.log(todos);

  return (
    <div className="container">
      <header>
        <Header />
        <form className="new-task" onSubmit={hanldeSubmit}>
          <input
            type="text"
            name="text"
            placeholder="할일을 입력하세요"
            value={todo}
            onChange={handleChange}
          />
        </form>
      </header>
      <div id="result"></div>
      <ul>
        {todos.map((res) => {
          return <li>{res}</li>;
        })}
      </ul>
    </div>
  );
}

export default App;
