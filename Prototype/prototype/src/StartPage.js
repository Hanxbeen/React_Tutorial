import React from "react";
import { Link } from "react-router-dom";

const StartPage = () => {
  return (
    <div>
      <h1>로그인</h1>
      <p>회사코드찾기</p>{" "}
      <Link to="/">
        <button>홈</button>
      </Link>
    </div>
  );
};

export default StartPage;
