import React from "react";
import { Route, Link } from "react-router-dom";
import About from "./About";
import Home from "./Home";
// import Profile from "./Profile";
import Profiles from "./Profiles";
import HistorySample from "./HistorySample";

const App = () => {
  // let userCheck = "admin";

  return (
    <div>
      <ul>
        <li>
          <Link to="/">
            <button>홈</button>
          </Link>
        </li>

        <li>
          <Link to="/about?admin=true">
            <button>관리자로 로그인 한다면?</button>
          </Link>
        </li>
        <li>
          <Link to="/about?laborer=true">
            <button>일반 사용자로 로그인 한다면?</button>
          </Link>
        </li>
        <li>
          <Link to="/profiles">
            {" "}
            <button>프로필 목록</button>
          </Link>
        </li>
        <li>
          <Link to="/history">뒤로가기나 홈버튼 구현</Link>
        </li>
        {/*<li>
          <Link to="/profiles/admin">
            <button>관리자 페이지</button>
          </Link>
        </li>
        <li>
          <Link to="/profiles/laborer">
            <button>일반 사용자 페이지</button>
          </Link>
        </li> */}
      </ul>
      <hr />
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" component={About} />
      <Route path="/profiles" component={Profiles} />{" "}
      <Route path="/history" component={HistorySample} />
      {/* <Route path="/profiles/:username" component={Profile} /> */}
    </div>
  );
};

export default App;
