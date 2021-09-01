import { React, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Form, Image } from "react-bootstrap";
// import styles from "./index.css";
import CompanyCodeModal from "./modal/companyCode";

function StartPage() {
  const [modalShow, setModalShow] = useState(false);
  const [checkedName, setCheckedName] = useState('');
  return (
    <div
      //modal이 작동이 안돼 form 태그를 div로 바꿈.. 폼태그에서 모달이 실행이 안되는이유가 뭘까?
      style={{
        //display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        top: "50%",
        left: "50%",
        width: "300px",
        height: "400px",
        marginLeft: "-150px",
        marginTop: "-430px",
      }}
    >
      <Image
        src="img/KETI_LOGO.jpg"
        rounded
        style={{ width: "300px", height: "350px" }}
      />
      <Form.Group className="companyCode" controlId="companyCode">
        <Form.Label>회사코드</Form.Label>
        <div style={{ display: "flex", height: "40px" }}>
          <Form.Control type="text" placeholder="회사코드" value={checkedName} />
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
            onHide={() => setModalShow(false)}
          />
        </div>
        {/*<Form.Text className="text-muted">회사 코드를 찾아주세요</Form.Text>*/}
      </Form.Group>
      <Form.Group className="companyNumber" controlId="companyNumber">
        <Form.Label>사번</Form.Label>
        <div style={{ display: "flex", height: "40px" }}>
          <Form.Control type="text" placeholder="사번" />
          {/* <Form.Text className="text-muted">사번을 입력해주세요</Form.Text>*/}
          <Button
            variant="dark"
            type="submit"
            style={{ marginLeft: "5px", width: "100px", fontSize: "13px" }}
          >
            PW찾기
          </Button>
        </div>
      </Form.Group>
      <Form.Group className="password" controlId="password">
        <Form.Label>비밀번호</Form.Label>
        <div style={{ display: "flex", height: "40px" }}>
          <Form.Control type="password" placeholder="비밀번호" />

          <Link to="/main">
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
      </Form.Group>
    </div>
  );
}

export default StartPage;
