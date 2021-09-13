import { React } from "react";
import "./Company.css";
import { Row, Col, Form, Button } from "react-bootstrap";
import TableCustom from "../../components/TableCustom";

import Sidebar from "../../components/Sidebar";
import Navibar from "../../components/Navibar";
import faker from "faker/locale/ko";
faker.seed(100);
function Company() {
  const columns = ["CompanyCode", "CompanyName", "Addr", "Phone"];
  const data = Array(25)
    .fill()
    .map(() => ({
      CompanyCode: faker.random.number(),
      RshName: faker.company.companyName(),
      Addr: faker.address.city(),
      Phone: faker.phone.phoneNumber(),
    }));
  return (
    <>
      <div>
        <Navibar />
      </div>
      <div style={{ display: "flex", width: "100%" }}>
        <Sidebar />
        <div
          style={{
            marginTop: "1vh",
            marginLeft: "10px",
            flex: "1",
          }}
        >
          <div
            style={{
              display: "flex",
              height: "100%",
            }}
          >
            <div
              style={{
                flex: "2",
                overflow: "auto",
                marginRight: "10px",
                height: "100vh",
              }}
            >
              <TableCustom columns={columns} data={data} />
            </div>
            <div style={{ flex: "2.5" }}>
              <Form
                style={{
                  alignSelf: "center",
                  justifyContent: "center",
                  width: "100%",
                  // padding: "200px",
                  paddingLeft: "50px",
                  paddingRight: "50px",
                  paddingTop: "50px",
                }}
              >
                <Row className="mb-3">
                  <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>회사코드</Form.Label>
                    <div style={{ display: "flex", height: "40px" }}>
                      <Form.Control
                        type="text"
                        placeholder="000000"
                        // value={companyCode}
                        readOnly
                      />

                      <Button
                        variant="dark"
                        type="search"
                        style={{
                          marginLeft: "5px",
                          width: "100px",
                          fontSize: "13px",
                        }}
                        // onClick={() => setModalShow(true)}
                      >
                        검색
                      </Button>

                      {/* <CompanyCodeModal
                    show={modalShow}
                    onHide={() => choice()}
                    getdata={setCompanyCode}
                  /> */}
                    </div>
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>명칭</Form.Label>
                    <Form.Control type="password" placeholder="농장 이름" />
                  </Form.Group>
                </Row>
                <Row className="mb-3">
                  <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>주소</Form.Label>
                    <Form.Control placeholder="전라북도 전주시 덕진구 반룡로 111" />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>전화번호</Form.Label>
                    <Form.Control type="password" placeholder="000-0000-0000" />
                  </Form.Group>
                </Row>

                <Row className="mb-3">
                  <Form.Group as={Col} controlId="formGridCity">
                    <Form.Label>...</Form.Label>
                    <Form.Control />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridState">
                    <Form.Label>...</Form.Label>
                    <Form.Select defaultValue="Choose...">
                      <option>...</option>
                      <option>...</option>
                    </Form.Select>
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridZip">
                    <Form.Label>...</Form.Label>
                    <Form.Control />
                  </Form.Group>
                </Row>

                <Form.Group className="mb-3" id="formGridCheckbox">
                  <Form.Check type="checkbox" label="상태 값" />
                </Form.Group>

                <Button
                  variant="dark"
                  type="submit"
                  style={{
                    marginTop: "20px",
                    alignSelf: "center",
                    justifyContent: "center",
                  }}
                >
                  수정하기
                </Button>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Company;
