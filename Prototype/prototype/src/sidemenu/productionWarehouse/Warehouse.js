import { React } from "react";
import "./Warehouse.css";
import {
  // Row, Col, Form, Button,
  ListGroup,
  Table,
} from "react-bootstrap";

import Sidebar from "../../components/Sidebar";
import Navibar from "../../components/Navibar";

function Warehouse() {
  let orderList = [
    { id: 1, ProductName: "상추", OrderAmount: "150", Account: " 150,000원" },
    { id: 2, ProductName: "케일", OrderAmount: "200", Account: " 220,000원" },
    {
      id: 3,
      ProductName: "깻잎",
      OrderAmount: "330",
      Account: " 3,330,000원",
    },
    { id: 4, ProductName: "가지", OrderAmount: "140", Account: " 50,000원" },
    {
      id: 5,
      ProductName: "당근",
      OrderAmount: "500",
      Account: " 52,410,000원",
    },
  ];
  let saleList = [
    {
      id: 1,
      Category: "판매 금액",
      Yesterday: "384,500원",
      Today: " 182,500원",
    },
    { id: 2, Category: "할인 금액", Yesterday: "15,500원", Today: " 4,000원" },
    {
      id: 3,
      Category: "매출 금액",
      Yesterday: "369,000원",
      Today: " 178,500원",
    },
    {
      id: 4,
      Category: "현금 매출",
      Yesterday: "135,000원 (58건)",
      Today: " 70,000원 (25건)",
    },
    {
      id: 5,
      Category: "카드 매출",
      Yesterday: "238,000원 (52건)",
      Today: " 108,000원 (21건)",
    },
  ];
  return (
    <>
      <div>
        <Navibar />
      </div>
      <div style={{ display: "flex", width: "100%", height: "100%" }}>
        <Sidebar style={{ flex: "1" }} />
        <div style={{ flex: "1", marginTop: "6vh" }}>
          <div style={{ display: "flex", height: "30vh" }}>
            <div
              style={{
                flex: "1",
                marginTop: "15px",
                overflow: "auto",
              }}
            >
              <div
                style={{
                  flexDirection: "column",
                }}
              >
                <h5 style={{ marginLeft: "20px", fontWeight: "600" }}>
                  금일 주문 내역
                </h5>
                <ListGroup>
                  <div
                    style={{
                      display: "flex",
                      marginLeft: "10px",
                      marginRight: "10px",
                    }}
                  >
                    <ListGroup.Item className="contents" variant="info">
                      품명
                    </ListGroup.Item>
                    <ListGroup.Item className="contents" variant="info">
                      주문 수량
                    </ListGroup.Item>
                    <ListGroup.Item className="contents" variant="info">
                      금액
                    </ListGroup.Item>
                  </div>
                </ListGroup>
                <Table striped bordered hover>
                  <tbody>
                    {orderList.map(({ ProductName, OrderAmount, Account }) => (
                      <tr
                        key={ProductName + OrderAmount + Account}
                        style={{
                          display: "flex",
                          marginLeft: "10px",
                          marginRight: "10px",
                          marginTop: "3px",
                        }}
                      >
                        <td style={{ flex: "1" }}>{ProductName}</td>
                        <td style={{ flex: "1" }}>{OrderAmount}</td>
                        <td style={{ flex: "1" }}>{Account}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </div>
            </div>
            <div
              style={{
                flex: "1",
                marginTop: "15px",
                overflow: "auto",
              }}
            >
              <h5 style={{ marginLeft: "20px", fontWeight: "600" }}>
                외상 잔액 현황
              </h5>
              <div
                style={{
                  background: "#e8f9fc",
                  padding: "20px",
                  margin: "15px",
                  height: "85%",
                }}
              >
                <div style={{ display: "flex" }}>
                  <div className="contentsLeft">
                    <h5>전일 미지급 잔액</h5>
                  </div>
                  <div className="contents"></div>
                  <div className="contentsRight">
                    <h5>20,021,070 원</h5>
                  </div>
                </div>
                <div style={{ display: "flex" }}>
                  <div className="contentsLeft">
                    <h5>주문 금액</h5>
                  </div>
                  <div className="contents"></div>
                  <div className="contentsRight">
                    <h5>1,114,710 원</h5>
                  </div>
                </div>
                <div style={{ display: "flex" }}>
                  <div className="contentsLeft">
                    <h5>입금액</h5>
                  </div>
                  <div className="contents"></div>
                  <div className="contentsRight">
                    <h5>0 원</h5>
                  </div>
                </div>
                <hr></hr>
                <div style={{ display: "flex", color: "#50bcdf" }}>
                  <div className="contentsLeft">
                    <h5 style={{ fontWeight: "600" }}>미지급 잔액</h5>
                  </div>
                  <div className="contents"></div>
                  <div className="contentsRight">
                    <h5 style={{ fontWeight: "600" }}>21,135,780 원</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div style={{ display: "flex", height: "30vh" }}>
            <div style={{ flex: "1", marginTop: "15px", overflow: "auto" }}>
              <h5 style={{ marginLeft: "20px", fontWeight: "600" }}>
                오늘 매출 현황
              </h5>
              <ListGroup>
                <div
                  style={{
                    display: "flex",
                    marginLeft: "10px",
                    marginRight: "10px",
                  }}
                >
                  <ListGroup.Item className="contents" variant="success">
                    항목
                  </ListGroup.Item>
                  <ListGroup.Item className="contents" variant="success">
                    어제
                  </ListGroup.Item>
                  <ListGroup.Item className="contents" variant="success">
                    오늘
                  </ListGroup.Item>
                </div>
              </ListGroup>
              <Table striped bordered hover>
                <tbody>
                  {saleList.map(({ Category, Yesterday, Today }) => (
                    <tr
                      key={Category + Yesterday + Today}
                      style={{
                        display: "flex",
                        marginLeft: "10px",
                        marginRight: "10px",
                        marginTop: "3px",
                      }}
                    >
                      <td style={{ flex: "1" }}>{Category}</td>
                      <td style={{ flex: "1" }}>{Yesterday}</td>
                      <td style={{ flex: "1" }}>{Today}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
            <div style={{ flex: "1", marginTop: "15px", overflow: "auto" }}>
              <h5 style={{ marginLeft: "20px", fontWeight: "600" }}>
                매출 TOP 메뉴
              </h5>
              <ListGroup>
                <div
                  style={{
                    display: "flex",
                    marginLeft: "10px",
                    marginRight: "10px",
                  }}
                >
                  <ListGroup.Item className="contents" variant="warning">
                    메뉴명
                  </ListGroup.Item>
                  <ListGroup.Item className="contents" variant="warning">
                    건수
                  </ListGroup.Item>
                  <ListGroup.Item className="contents" variant="warning">
                    매출액
                  </ListGroup.Item>
                </div>
              </ListGroup>
              <div
                style={{
                  marginLeft: "10px",
                  marginRight: "10px",
                  marginTop: "100px",
                  textAlign: "center",
                }}
              >
                <p>주문내역이 없습니다.</p>
              </div>
            </div>
          </div>
          <div
            style={{ display: "flex", height: "40vh", alignItems: "center" }}
          >
            <div style={{ flex: "1", height: "100%" }}>
              <h5 style={{ marginLeft: "20px", fontWeight: "600" }}>
                주간 매출 현황
              </h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Warehouse;
