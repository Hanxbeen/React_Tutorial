import { React } from "react";
import "./RSH.css";

import Sidebar from "../../components/Sidebar";
import Navibar from "../../components/Navibar";
function RSH() {
  return (
    <>
    <div>
      <Navibar />
    </div>
    <div className="parent">
      <Sidebar className="child" />
      <p style={{ flex: 7, marginTop: "6vh" }}>
        육묘장
      </p>
    </div>
  </>
  );
}

export default RSH;
