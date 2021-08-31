import React from "react";
import { Link, Route } from "react-router-dom";
import StartPage from "./StartPage";
const MainPage = () => {
  return (
    <div>
      <h1>이곳은 메인</h1>
      <p>모든 메뉴들이 있찌</p>{" "}
      <Link to="/">
        <button>홈</button>
      </Link>
      <Route path="/" exact={true} component={StartPage} />
    </div>
  );
};

export default MainPage;
