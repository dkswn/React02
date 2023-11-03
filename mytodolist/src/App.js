
import './App.css';
import React from "react";

function App() {


  return (
    <div className="App">
        <div className="blackNav">
          <div>MyToDoList</div>
        </div>
        <div className="grayHeader">
            <div className="InputText">
         제목: <input/>
            내용: <input />
                </div>
            <div>
            <button>추가하기</button>
                </div>
        </div>
    </div>
  );
}

export default App;
