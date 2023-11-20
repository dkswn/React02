
import React from 'react';
import { BrowserRouter, Route, Routes} from "react-router-dom";
import Detail from "./Pages/Detail";
import Home from "./Pages/Home";
 // React-router-dom 설정
const App = () => {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/auth" element={<Detail/>} />
      </Routes>
    </BrowserRouter>
  );
}
  // const inputRef = useRef(null);
  // const [todos, setTodos] = useState([
  //   { id: 1, title: "", body: "", isDone: false },
  // ]);
  // const [title, setTitle] = useState('');
  // const [body, setBody] = useState('');

  // 제목 입력란 값 변경 핸들러
  // const handleTitleChange = (event) => {
  //   setTitle(event.target.value);
  // }

  // // 내용 입력란 값 변경 핸들러
  // const handleBodyChange = (event) => {
  //   setBody(event.target.value);
  // }

  // // 할 일 추가 버튼 클릭 핸들러
  // const handleAddTodo = (event) => {
  //   const newTodo = {
  //     id: todos.length + 1,
  //     title,
  //     body,
  //     isDone: false,
  //   }
  //   if (title === "") {
  //     alert("내용을 입력하세요!!");
  //   event.preventDefault();
  //   } else {
  //     const updatedTodos = [...todos, newTodo].sort((a, b) => b.id - a.id);
  //     setTodos(updatedTodos);
  //     event.preventDefault();
  //     setTitle("");
  //     setBody("");
  //     inputRef.current.focus();
  //   }
  // };
  // // 할 일 삭제 핸들러
  // const deleteTodoHandler = (id) => {
  //   const updatedTodos = todos.filter((todo) => todo.id !== id);
  //   setTodos(updatedTodos);
  // };

  // // 할 일 완료 버튼 클릭 핸들러
  // const handleCompleteBtn = (item) => {
  //   const updatedTodos = todos.map((todo) => (
  //     todo.id === item.id ? { ...todo, isDone: true } : todo
  //   ));
  //   setTodos(updatedTodos);
  // };

  // // 할 일 취소 버튼 클릭 핸들러
  // const cancelHandleBtn = (item) => {
  //   const updatedTodos = todos.map((todo) => (
  //     todo.id === item.id ? { ...todo, isDone: false } : todo
  //   ));
  //   setTodos(updatedTodos);
  // };
  // return (
//     <div>
//       <div className="App">
//         <div className="blackNav">
//           <div>MyToDoList</div>
//         </div>
//         <div className="grayHeader">
//           <div className="InputText">
//             <span className="titleInputClass">
//               제목: &nbsp;
//               <input
//                 value={title} type="input"
//                 ref={inputRef}
//                 onChange={handleTitleChange}
//                 placeholder="제목을 입력하세요"
//               />
//             </span>
//             <span className="CommentInputClass">
//               내용:&nbsp;
//               <input
//                 value={body} type="input"
//                 onChange={handleBodyChange}
//                 placeholder="내용을 입력하세요"
//               />
//             </span>
//           </div>
//           <button onClick={handleAddTodo}>추가하기</button>
//         </div>
//       </div>
//       <div className="WorkingLineClass">
//         Working...🔥
//       </div>
//      {todos.map((item) => {
//   if (!item.isDone) {
//     return (
//       <div key={item.id} className="CreateComment">
//         <div>
//           <h2>{item.title}</h2>
//           <p>{item.body}</p>
//         </div>
//         <div className="ContainerInnerBtn">
//           <button
//             onClick={() => deleteTodoHandler(item.id)}
//             className="deleteButton">
//             삭제
//           </button>
//           <button onClick={() => handleCompleteBtn(item)} className="completeButton">
//             완료
//           </button>
//         </div>
//       </div>
//     )
//   }
//   return null; // 완료된 항목은 렌더링하지 않음
// })}

//       <div className="WorkingLineClass">
//         Done...🔥
//       </div>
//       {todos.map((item) => {
//         return item.isDone ? (
//           <div key={item.id} className="CreateComment">
//             <div>
//               <h2>{item.title}</h2> {/* 제목 표시 */}
//               <p>{item.body}</p> {/* 내용 표시 */}
//             </div>
//             <div>
//               <button onClick={() => deleteTodoHandler(item.id)} className="deleteButton">
//                 삭제
//               </button>
//               <button onClick={() => cancelHandleBtn(item)} className="cancelButton">
//                 돌아가기
//               </button>
//             </div>
//           </div>
//         ) : null;
//       })}
//     </div>
//    )
//  }
export default App;
