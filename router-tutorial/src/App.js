import React from "react";
import { Route, Link } from "react-router-dom";
import About from "./About";
import Home from "./Home";
import Profile from "./Profile";

const App = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">
            <button>홈</button>
          </Link>
        </li>
        <li>
          <Link to="/about">
            <button>메인</button>
          </Link>
        </li>
        <li>
          <Link to="/profiles/admin">
            <button>관리자 로그인</button>
          </Link>
        </li>
        <li>
          <Link to="/profiles/laborer">
            <button>일용직 로그인</button>
          </Link>
        </li>
      </ul>
      <hr />
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" component={About} />
      <Route path="/profiles/:username" component={Profile} />
    </div>
  );
};

export default App;
