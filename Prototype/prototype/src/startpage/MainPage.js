import React from "react";
import { useHistory, Link } from "react-router-dom";
import {
  Image,
  Button,
  Navbar,
  Nav,
  // Container,
  NavDropdown,
} from "react-bootstrap";
import "./Start.css";
// import salesStatus from "../sidemenu/sales/Status";
// import salesManagement from "../sidemenu/sales/Management";
import { ProSidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
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
          {/*
            variant="pills"  
            <Nav.Item>
              <Nav.Link href="/home">Active</Nav.Link>
            </Nav.Item>*/}
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
      {/* <Navbar
        fixed="bottom"
        bg="light"
        variant="light"
        style={{ height: "40px" }}
      >
        <Container>
          <Image
            alt=""
            src="img/asdf.png"
            width="15%"
            height="15%"
            style={{ marginLeft: "20px", marginRight: "20px" }}
          />
          <Navbar.Brand href="/main" style={{ fontSize: "14px" }}>
            한국전자기술연구원
          </Navbar.Brand>
          <Navbar.Collapse className="justify-content-end"></Navbar.Collapse>
          <Navbar.Text style={{ fontSize: "13px" }}>
            Copyright © 2021 Korea Electronics Technology Institute
          </Navbar.Text>
        </Container>
      </Navbar> */}
      {/************************************************************/}
      <div>
        <ProSidebar
          style={{ height: "100vh", width: "15vw", marginTop: "6vh" }}
        >
          <Menu iconShape="square">
            <MenuItem className="submenues">
              회사 관리 <Link to="/" />
            </MenuItem>
            <MenuItem className="submenues">
              육묘장 관리 <Link to="/" />
            </MenuItem>
            <MenuItem className="submenues">
              생산창고 관리 <Link to="/" />
            </MenuItem>
            <SubMenu title="인사 관리" className="submenues">
              <MenuItem className="subitems">
                사용자 등록
                <Link to="/" />
              </MenuItem>
              <MenuItem className="subitems">일용직 등록</MenuItem>
            </SubMenu>
            <SubMenu title="품질 관리" className="submenues">
              <MenuItem className="subitems">품질 등록</MenuItem>
              <MenuItem className="subitems">폐기 등록</MenuItem>
              <MenuItem className="subitems">품질점검 일정 등록</MenuItem>
              <MenuItem className="subitems">설비환경 제어</MenuItem>
            </SubMenu>
            <SubMenu title="생산관리" className="submenues">
              <MenuItem className="subitems">발주생산 등록</MenuItem>
              <MenuItem className="subitems">구매요청 등록</MenuItem>
              <MenuItem className="subitems">출하대기 등록</MenuItem>
              <MenuItem className="subitems">일용요청 등록</MenuItem>
              <MenuItem className="subitems">설비환경 제어</MenuItem>
            </SubMenu>
            <SubMenu title="자재 / 설비관리" className="submenues">
              <MenuItem className="subitems">거래처 등록</MenuItem>
              <MenuItem className="subitems">품목 등록</MenuItem>
              <MenuItem className="subitems">자산 / 설비 등록</MenuItem>
              <SubMenu title="자산 / 설비 등록" className="submenues">
                <MenuItem className="subitems">자산 등록</MenuItem>
                <MenuItem className="subitems">설비 등록</MenuItem>
              </SubMenu>
              <MenuItem className="subitems">구매의뢰 등록</MenuItem>
              <MenuItem className="subitems">구매처리 등록</MenuItem>
            </SubMenu>
            <SubMenu title="영업 관리" className="submenues">
              <MenuItem className="subitems">거래처 등록</MenuItem>
              <MenuItem className="subitems">발주 등록</MenuItem>
              <MenuItem className="subitems">출하 등록</MenuItem>
              <MenuItem className="subitems">매출처리 등록</MenuItem>
            </SubMenu>
          </Menu>
        </ProSidebar>
      </div>
    </div>
  );
};

export default MainPage;
// https://github.com/azouaoui-med/react-pro-sidebar
// https://reactjsexample.com/customizable-and-responsive-react-sidebar-library-with-dropdown-menus/
