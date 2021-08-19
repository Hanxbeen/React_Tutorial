import React from "react";
import Hello from "./Hello";

function App() {
  return (
    <>
      <Hello name="props를 통해 컴포넌트에게 값 전달" color="red" />;
      <Hello color="pink" />
    </>
  );
}

export default App;
