import React from "react";
import { useHistory } from "react-router-dom";
import {
  Image,
  Button,
  Navbar,
  Nav,
  // Container,
  NavDropdown,
} from "react-bootstrap";

function Navibar() {
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
    <>
      <Navbar
        fixed="top"
        bg="black"
        variant="dark"
        style={{ height: "6vh", width: "100vw" }}
      >
        <Image
          alt=""
          src="img/green.png"
          width="30"
          height="30"
          style={{ marginLeft: "50px", marginRight: "20px" }}
        />
        <Navbar.Brand href="/main" style={{ marginRight: "60px" }}>
          ERP
        </Navbar.Brand>
        <Nav defaultActiveKey="/home">
          <Nav.Item>
            <Nav.Link eventKey="link-1">도움말(F1)</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-2">환경 설정</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <NavDropdown
              id="nav-dropdown-dark-example"
              title="ACTION"
              menuVariant="dark"
            >
              <NavDropdown.Item href="#action/3.1">등록</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">수정</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">조회</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">삭제</NavDropdown.Item>
            </NavDropdown>
          </Nav.Item>
        </Nav>
        <Navbar.Collapse
          className="justify-content-end"
          style={{ marginRight: "50px" }}
        >
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
              fontSize: "14px",
            }}
          >
            USER
          </Navbar.Text>
          <Button
            variant="outline-light"
            onClick={logout}
            style={{ fontSize: "14px" }}
          >
            LOGOUT
          </Button>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default Navibar;
