import React from "react";
import Hello from "./Hello";
import Wrapper from "./Wrapper";

function App() {
  return (
    <Wrapper>
      <Hello name="props를 통해 컴포넌트에게 값 전달" color="red" />;
      <Hello color="pink" />
    </Wrapper>
  );
}

export default App;
