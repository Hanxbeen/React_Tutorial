import React from "react";
// import { useHistory, Link } from "react-router-dom";
// import { Switch, Route } from "react-router-dom";
import { Route } from "react-router-dom";

import //   Image,
//   Button,
//   Navbar,
//   Nav,
//   // Container,
//   NavDropdown,
"react-bootstrap";
import "./Start.css";
import Sidebar from "../components/Sidebar";
import Navibar from "../components/Navibar";
import Company from "../sidemenu/company/Company";

const MainPage = () => {
  return (
    <>
      <div>
        <Navibar />
      </div>
      {/* <div className="parent">
        <Sidebar className="child" />
        <p className="child">
          ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        </p>
      </div> */}
      <div style={{ display: "flex" }}>
        <Sidebar />
        {/* <Switch> */}
        {/* <Route path="/" exact={true} component={StartPage} />
          <Route path="/" exact={true} component={StartPage} />
          <Route path="/" exact={true} component={StartPage} />
          <Route path="/" exact={true} component={StartPage} />
          <Route path="/" exact={true} component={StartPage} />
          <Route path="/" exact={true} component={StartPage} />
          <Route path="/" exact={true} component={StartPage} />
          <Route path="/" exact={true} component={StartPage} />
          <Route path="/" exact={true} component={StartPage} /> */}
        {/* </Switch> */}
        <p style={{ flex: 7, marginTop: "6vh" }}>
          이 공간에서 페이지를 보여준다.
          <Company />
        </p>
      </div>
    </>
  );
};

export default MainPage;
// https://github.com/azouaoui-med/react-pro-sidebar
// https://reactjsexample.com/customizable-and-responsive-react-sidebar-library-with-dropdown-menus/
