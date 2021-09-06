import { React, useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
// import About from "./About";
import StartPage from "./startpage/Login";
import MainPage from "./startpage/MainPage";
import FindPW from "./startpage/FindPW";
import "./index.css";

import Company from "./sidemenu/company/Company";
import RSH from "./sidemenu/raisingSeedingHouse/RSH";
const App = () => {
  // let userCheck = "admin";
  const [mainCheck, setMainCheck] = useState(false);
  useEffect(() => {
    setMainCheck(window.location.pathname);
    // console.log(mainCheck);
    if (mainCheck === "/") {
      // alert("안녕 로그인?");
      setMainCheck(true);
      console.log("로그인페이지");
    } else {
      // alert(`안녕 ${mainCheck}`);
      console.log(`다른 페이지`);
      setMainCheck(false);
    }
  }, [mainCheck]);
  return (
    <div>
      {/* <ul>
        <li> 
     <Link to="/">
        <Button style={{ margin: 10 }}>홈</Button>
      </Link>
      <Link to="/main">
        <Button style={{ margin: 10 }} variant="success">
          로그인
        </Button>
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
            <button>프로필 목록</button>
          </Link>
        </li>
        <li>
          <Link to="/history">뒤로가기나 홈버튼 구현</Link>
        </li>
        <li>
          <Link to="/profiles/admin">
            <button>관리자 페이지</button>
          </Link>
        </li>
        <li>
          <Link to="/profiles/laborer">
            <button>일반 사용자 페이지</button>
          </Link>
        </li> 
   </ul> */}
      {/* {{ mainCheck } ? ( */}
      <Switch>
        <Route path="/" exact={true} component={StartPage} />
        <Route path="/main" exact={true} component={MainPage} />
        <Route path="/findpw" exact={true} component={FindPW} />
        <Route path="/companyMng" component={Company} />
        <Route path="/raisingseedinghouse" component={RSH} />
        {/* <Route path="/main" component={MainPage} /> 
 <Route path="/profiles/:username" component={Profile} /> */}
        <Route
          // path 를 따로 정의하지 않으면 모든 상황에 렌더링됨
          render={({ location }) => (
            <div>
              <h2>이 페이지는 존재하지 않습니다:</h2>
              <p>{location.pathname}</p>
            </div>
          )}
        />
      </Switch>
    </div>
  );
};

export default App;
