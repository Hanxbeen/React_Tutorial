import React from "react";
import "./App.css";

function Hello() {
  const name = "Hanxbeen";

  const style = {
    backgroundColor: "Black",
    color: "aqua",
    fontSize: 24,
    padding: "1rem",
  };
  return (
    <div style={style}>
      <h1>저는 {name} 입니다</h1>
      <h2>그럼 20000, 안녕히 계세요..</h2>
      <div className="gray-box"></div>
      <div className="gray-box"></div>
      <div className="gray-box"></div>
    </div>
  );
}

export default Hello;
