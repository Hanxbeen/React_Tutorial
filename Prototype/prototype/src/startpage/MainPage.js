import React from "react";
import { useHistory } from "react-router-dom";
import {
  Image,
  Button,
  Navbar,
  Nav,
  Container,
  Tab,
  Row,
  Col,
} from "react-bootstrap";
import salesStatus from "../sidemenu/sales/Status";
import salesManagement from "../sidemenu/sales/Management";
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
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">ERP</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#pricing">도움말(F1)</Nav.Link>
            <Nav.Link href="#pricing">환경 설정</Nav.Link>
            <Nav.Link href="#pricing">등록</Nav.Link>
            <Nav.Link href="#pricing">삭제</Nav.Link>
            <Nav.Link href="#pricing">저장</Nav.Link>
            <Nav.Link href="#pricing">조회</Nav.Link>
            <Nav.Link href="#pricing">출력</Nav.Link>
            <Nav.Item>
              <Nav.Link href="/main">Active</Nav.Link>
            </Nav.Item>
          </Nav>
          <Nav fill variant="tabs" defaultActiveKey="/home">
            {/** <Nav.Item>
              <Nav.Link href="/link-1">Active</Nav.Link>
            </Nav.Item>*/}
            <Nav.Item>
              <Nav.Link eventKey="link-2">Loooonger NavLink</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-3">Link</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="disabled" disabled>
                Disabled
              </Nav.Link>
            </Nav.Item>
          </Nav>
          <Navbar.Collapse className="justify-content-end">
            {/**<Navbar.Text>
              Signed in as: <a href="#login">Mark Otto</a>
            </Navbar.Text>
            <Nav.Link href="#home" style={{ color: "white" }}>
              접속 상태
            </Nav.Link>*/}
            <Image
              src="img/signal.png"
              onClick={logout}
              style={{
                width: "22px",
                height: "20px",
              }}
            />
            <Nav.Link href="#features" style={{ color: "white" }}>
              안중근 님
            </Nav.Link>
            <Button variant="outline-light" onClick={logout}>
              Logout
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/************************************************************/}
      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <Row>
          <Col sm={3}>
            <Nav variant="pills" className="flex-column">
              <Nav.Item>
                <Nav.Link eventKey="first">영업관리</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="second">영업현황</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={9}>
            <Tab.Content>
              <Tab.Pane eventKey="first">
                <salesStatus />
              </Tab.Pane>
              <Tab.Pane eventKey="second">
                <salesManagement />
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </div>
  );
};

export default MainPage;
