import React from "react";
import "./App.css";

function Hello(props) {
  const name = "Hanxbeen";
  const makeTag = (
    <div className="makeProps">
      <p>만든태그</p>
    </div>
  );
  const style = {
    backgroundColor: "Black",
    color: "aqua",
    fontSize: 24,
    padding: "1rem",
  };
  return (
    <div style={style}>
      <h1>저는 {name} 입니다</h1>
      <h1> {props.name} </h1>

      {props.isSpecial ? <h1>조건부 렌더링</h1> : null}
      {props.isSpecial && <h1>조건부 렌더링</h1>}

      <h2 style={{ color: props.color }}>그럼 20000, 안녕히 계세요..</h2>
      <div className="gray-box"></div>
      <div className="gray-box"></div>
      <div className="gray-box"></div>
      {makeTag}
      {/* 주석 처리하는 방법 */}
      {/* 주석 처리하는 방법 */}
    </div>
  );
}
Hello.defaultProps = {
  name: "이름없음",
};
export default Hello;
