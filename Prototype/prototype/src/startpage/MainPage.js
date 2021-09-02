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
  NavDropdown,
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
          <Navbar.Brand href="/main">ERP</Navbar.Brand>

          <Nav variant="pills" defaultActiveKey="/home">
            {/* <Nav.Item>
              <Nav.Link href="/home">Active</Nav.Link>
            </Nav.Item>*/}
            <Nav.Item>
              <Nav.Link eventKey="link-1">도움말(F1)</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-2">환경 설정</Nav.Link>
            </Nav.Item>

            <NavDropdown
              id="nav-dropdown-dark-example"
              title="Action"
              menuVariant="dark"
            >
              <NavDropdown.Item href="#action/3.1">등록</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">수정</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">조회</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">삭제</NavDropdown.Item>
            </NavDropdown>
          </Nav>

          <Navbar.Collapse className="justify-content-end">
            <Image
              src="img/signal.png"
              onClick={logout}
              style={{
                width: "22px",
                height: "20px",
              }}
            />
            <Navbar.Text
              style={{
                color: "white",
                marginLeft: "25px",
                marginRight: "25px",
              }}
            >
              안중근 님
            </Navbar.Text>

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
