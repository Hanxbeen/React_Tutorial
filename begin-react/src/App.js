import React from "react";
import Hello from "./Hello";

function App() {
  const name = "Hanxbeen";
  return (
    <>
      <Hello />
      <div>
        <h1>저는 {name} 입니다</h1>
        <h2>그럼 20000, 안녕히 계세요..</h2>
      </div>
    </>
  );
}

export default App;
