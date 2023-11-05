import './App.css';
import React, { useState } from "react";
import TodoTemplate from "./Component/TodoTemplate";

const App = () => {
  const [todos, setTodos] = useState([{ id: 0, title: "", body: "" }]);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  }

  const handleBodyChange = (event) => {
    setBody(event.target.value);
  }

  const handleAddTodo = (event) => {
    if (title.trim() === '' || body.trim() === '') {
      return; // 빈 제목 또는 내용일 경우 추가하지 않음
    }
    const newTodo = {
      id: todos.length + 1,
      title,
      body,
    };

    setTodos([...todos, newTodo]);
  };
        // 삭제하기
  const deleteTodosHandler = (id) => {
    const newTodosList = todos.filter((todo) => todo.id !== id);
    setTodos(newTodosList);
  };

  const renderTodoList = () => {
    return todos.map((item) => (
      <div key={item.id} className="CreateComment">
        <p id="first">{item.title}</p>
        <p id="second">{item.body}</p>
        <button onClick={() => deleteTodosHandler(item.id)}>
          삭제하기
        </button>
      </div>
    ));
  };

  const renderTodoList2 = () => {
    return todos.map((item) => (
      <div key={item.id} className="CreateComment">
        <p id="first">{item.title}</p>
        <p id="second">{item.body}</p>
        <button onClick={() => deleteTodosHandler(item.id)}>
          삭제하기
        </button>
      </div>
    ));
  };
  return (
    <div>
      <div className="App">
        <div className="blackNav">
          <div>MyToDoList</div>
        </div>
        <div className="grayHeader">
          <div className="InputText">
            <span className="titleInputClass">
              제목: &nbsp;
              <input
                value={title}
                onChange={handleTitleChange}
                placeholder="제목을 입력하세요"
              />
            </span>
            <span className="CommentInputClass">
              내용:&nbsp;
              <input
                value={body}
                onChange={handleBodyChange}
                placeholder="내용을 입력하세요"
              />
            </span>
          </div>
          <button onClick={handleAddTodo}>추가하기</button>
        </div>
      </div>
      <div className="WorkingLineClass">
        Working...!
      </div>
      {renderTodoList()}
      <div className="WorkingLineClass">
        Done...!
      </div>
      {renderTodoList2()}
    </div>
  );
};

export default App;
