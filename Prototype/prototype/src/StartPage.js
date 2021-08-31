import React from "react";
import { Link } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import "./index.css";

const StartPage = () => {
  return (
    <div>
      <Form
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
          marginTop: "-200px",
        }}
      >
        <Form.Group className="companyCode" controlId="companyCode">
          <Form.Label>회사코드</Form.Label>
          <Form.Control type="text" placeholder="회사코드" />
          <Form.Text className="text-muted">회사 코드를 찾아주세요</Form.Text>
        </Form.Group>
        <Form.Group className="companyNumber" controlId="companyNumber">
          <Form.Label>사번</Form.Label>
          <Form.Control type="number" placeholder="사번" />
          <Form.Text className="text-muted">사번을 입력해주세요</Form.Text>
        </Form.Group>
        <Form.Group className="password" controlId="password">
          <Form.Label>비밀번호</Form.Label>
          <Form.Control type="password" placeholder="비밀번호" />
        </Form.Group>
        <div style={{ margin: 10 }}>
          <Button variant="danger" type="submit">
            PW찾기
          </Button>
          <Link to="/main">
            <Button>로그인</Button>
          </Link>
        </div>
      </Form>
    </div>
  );
};

export default StartPage;
