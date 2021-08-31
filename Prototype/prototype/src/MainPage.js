import React from "react";
import { useHistory } from "react-router-dom";
import { Button } from "react-bootstrap";
import { useState } from "react";

const MainPage = () => {
  const [state, setState] = useState(0);
  const useConfirm = (message = null, onConfirm, onCancel) => {
    const confirmAction = () => {
      if (window.confirm(message)) {
        onConfirm();
        setState(0);
      } else {
        onCancel();
        setState(1);
      }
    };

    return confirmAction;
  };
  const history = useHistory();

  const routeChange = () => {
    confirmLogout();
    console.log(state);
    if (state) {
      let path = `/`;
      history.push(path);
    } else {
      let path = `/main`;
      history.push(path);
    }
  };
  const moveConfirm = () => console.log("로그아웃 했습니다.");
  const cancelConfirm = () => console.log("취소했습니다.");
  const confirmLogout = useConfirm(
    "로그아웃 하시겠습니까?",
    moveConfirm,
    cancelConfirm
  );
  return (
    <div>
      <h1>이곳은 메인</h1>
      <p>모든 메뉴들이 있찌</p>
      {/* <Link to="/">
        <Button onClick={confirmLogout}>홈</Button>
      </Link> */}
      <Button onClick={routeChange}>로그아웃</Button>
    </div>
  );
};

export default MainPage;
