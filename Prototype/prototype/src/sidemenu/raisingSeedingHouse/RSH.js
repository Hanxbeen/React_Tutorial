import { React } from "react";
import "./RSH.css";
import { Row, Col, Card, Pagination } from "react-bootstrap";

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
        {/* <p style={{ flex: 7, marginTop: "6vh" }}>육묘장</p> */}
        <Row
          style={{
            flex: 6,
            marginTop: "7vh",
            marginLeft: "10px",
            marginRight: "10px",
          }}
        >
          <Col>
            <Card small className="mb-4">
              <Card.Body className="p-0 pb-3">
                <table className="table mb-0">
                  <thead className="bg-light">
                    <tr>
                      <th scope="col" className="border-0">
                        #
                      </th>
                      <th scope="col" className="border-0">
                        회사코드
                      </th>
                      <th scope="col" className="border-0">
                        육묘장 명
                      </th>
                      <th scope="col" className="border-0">
                        시/군 구/동
                      </th>
                      <th scope="col" className="border-0">
                        도
                      </th>
                      <th scope="col" className="border-0">
                        번호
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>100000</td>
                      <td>화순 육묘장</td>
                      <td>화순군 도곡면 쌍곡리 828-5</td>
                      <td>전라남도</td>
                      <td>061-371-5231</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>200000</td>
                      <td>GCL Farm</td>
                      <td>화성시 장안면 석포리 718-54</td>
                      <td>경기도</td>
                      <td>031-351-8864</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>300000</td>
                      <td>전주 육묘장</td>
                      <td>전주시 00구 00</td>
                      <td>전라북도</td>
                      <td>063-000-0000</td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>400000</td>
                      <td>부안 육묘장</td>
                      <td>부안군 00면 00</td>
                      <td>전라북도</td>
                      <td>063-000-0000</td>
                    </tr>
                  </tbody>
                </table>
              </Card.Body>
            </Card>
          </Col>
          <Pagination style={{ alignSelf: "center", justifyContent: "center" }}>
            <Pagination.First />
            <Pagination.Prev />
            <Pagination.Item active>{1}</Pagination.Item>
            <Pagination.Item>{2}</Pagination.Item>
            <Pagination.Item>{3}</Pagination.Item>
            <Pagination.Item>{4}</Pagination.Item>
            <Pagination.Ellipsis />
            <Pagination.Item>{11}</Pagination.Item>
            <Pagination.Next />
            <Pagination.Last />
          </Pagination>
        </Row>
      </div>
    </>
  );
}

export default RSH;
