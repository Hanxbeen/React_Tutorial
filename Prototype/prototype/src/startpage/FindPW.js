import { React, useState } from "react";
import { useHistory } from "react-router-dom";

import { Button, Form, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import CompanyCodeModal from "../modal/CompanyCode";

function FindPW() {
  const history = useHistory();

  const [modalShow, setModalShow] = useState(false);
  const [companyCode, setCompanyCode] = useState("");
  function choice() {
    setModalShow(false);
  }
  const logout = () => {
    alert("정보가 일치하지 않다면 알려주고 로그인 페이지로 이동");
    let path = `/`;

    history.push(path);
  };
  return (
    <div
      //modal이 작동이 안돼 form 태그를 div로 바꿈.. 폼태그에서 모달이 실행이 안되는이유가 뭘까?
      style={{
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        top: "50%",
        left: "50%",
        width: "300px",
        height: "400px",
        marginLeft: "-150px",
        marginTop: "-275px",
      }}
    >
      <Image
        src="img/shield.png"
        rounded
        style={{ width: "100%", height: "70%", marginBottom: "40px" }}
      />
      <Form.Group
        className="findPW"
        controlId="findPW"
        style={{ marginBottom: "5px" }}
      >
        <div style={{ display: "flex", height: "40px" }}>
          <Form.Control
            type="text"
            placeholder="회사코드"
            value={companyCode}
            readOnly
          />

          <Button
            variant="dark"
            type="search"
            style={{ marginLeft: "5px", width: "100px", fontSize: "13px" }}
            onClick={() => setModalShow(true)}
          >
            검색
          </Button>
          <CompanyCodeModal
            show={modalShow}
            onHide={() => choice()}
            getdata={setCompanyCode}
          />
        </div>
      </Form.Group>
      <Form.Group
        className="companyNumber"
        controlId="companyNumber"
        style={{ marginBottom: "5px" }}
      >
        <div style={{ display: "flex", height: "40px" }}>
          <Form.Control type="text" placeholder="사번" />
          <Button
            variant="dark"
            type="submit"
            onClick={logout}
            style={{ marginLeft: "5px", width: "100px", fontSize: "13px" }}
          >
            PW찾기
          </Button>
        </div>
      </Form.Group>
      {/* <Form.Group className="password" controlId="password">
        <div style={{ display: "flex", height: "40px" }}>
          <Form.Control type="password" placeholder="비밀번호" />

          <Link to="/">
            <Button
              style={{
                height: "40px",
                fontSize: "13px",
                marginLeft: "5px",
                width: "78px",
              }}
            >
              로그인
            </Button>
          </Link>
        </div>
      </Form.Group> */}
    </div>
  );
}

export default FindPW;
