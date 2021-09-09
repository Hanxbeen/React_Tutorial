import { React } from "react";
import "./Company.css";
// import { Row, Col, Form, Button } from "react-bootstrap";
// import TableCustom from "../../components/TableCustom";

import Sidebar from "../../components/Sidebar";
import Navibar from "../../components/Navibar";
import faker from "faker/locale/ko";
faker.seed(100);
function Company() {
  // const columns = ["CompanyCode", "RshName", "Addr", "Phone"];
  // const data = Array(15)
  //   .fill()
  //   .map(() => ({
  //     CompanyCode: faker.random.number(),
  //     RshName: faker.company.companyName(),
  //     Addr: faker.address.city(),
  //     Phone: faker.phone.phoneNumber(),
  //   }));
  return (
    <>
      <div>
        <Navibar />
      </div>
      <div style={{ display: "flex", width: "100%" }}>
        <Sidebar />
        <div
          style={{
            marginTop: "6vh",
            // marginLeft: "10px",
            // marginRight: "10px",
            width: "100%",
            flex: "1",
          }}
        >
          <div
            style={{
              display: "flex",
              background: "#585858",
              height: "100%",
            }}
          >
            <div style={{ background: "#2E9AFE", flex: "1" }}>aa</div>
            <div style={{ background: "#2E9A2E", flex: "1" }}>bb</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Company;
