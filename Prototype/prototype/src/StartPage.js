import React from "react";
import { Link } from "react-router-dom";
import { Button, Form } from "react-bootstrap";

const StartPage = () => {
  return (
    <div>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>회사코드</Form.Label>
          <Form.Control type="email" placeholder="회사코드" />
          <Form.Text className="text-muted">회사 코드를 찾아주세요</Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>사번</Form.Label>
          <Form.Control type="email" placeholder="사번" />
          <Form.Text className="text-muted">사번을 입력해주세요</Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>비밀번호</Form.Label>
          <Form.Control type="password" placeholder="비밀번호" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="danger" type="submit">
          PW찾기
        </Button>
        <Link to="/main">
          <Button>로그인</Button>
        </Link>
      </Form>
    </div>
  );
};

export default StartPage;
