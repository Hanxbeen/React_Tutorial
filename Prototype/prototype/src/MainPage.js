import React from "react";
import { useHistory } from "react-router-dom";
import { Button } from "react-bootstrap";

const MainPage = () => {
  const history = useHistory();

  const logout = () => {
    let check = window.confirm("로그아웃 하시겠습니까?");
    if (check) {
      let path = `/`;
      history.push(path);
    } else {
      let path = `/main`;
      history.push(path);
    }
  };
  return (
    <div>
      <h1>메인</h1>
      <p>모든 메뉴들</p>
      {/* <Link to="/">
        <Button onClick={confirmLogout}>홈</Button>
      </Link> */}
      <Button onClick={logout}>로그아웃</Button>
    </div>
  );
};

export default MainPage;
