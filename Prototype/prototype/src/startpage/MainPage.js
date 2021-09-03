import React from "react";
// import { useHistory, Link } from "react-router-dom";
// import {
//   Image,
//   Button,
//   Navbar,
//   Nav,
//   // Container,
//   NavDropdown,
// } from "react-bootstrap";
import "./Start.css";
import Sidebar from "./Sidebar";
import Navibar from "./Navibar";
const MainPage = () => {
  return (
    <>
      <div>
        <Navibar />
      </div>
      <div>
        <Sidebar />
      </div>
    </>
  );
};

export default MainPage;
// https://github.com/azouaoui-med/react-pro-sidebar
// https://reactjsexample.com/customizable-and-responsive-react-sidebar-library-with-dropdown-menus/
