import { React } from "react";
import "./Company.css";

import Sidebar from "../../components/Sidebar";
import Navibar from "../../components/Navibar";
function Company() {
  return (
    <>
      <div>
        <Navibar />
      </div>
      <div className="parent">
        <Sidebar className="child" />
        <p style={{ flex: 7, marginTop: "6vh" }}>
          회사
        </p>
      </div>
    </>
  );
}

export default Company;
