import { React } from "react";
import "./RSH.css";
import { Row, Col, Form, Button } from "react-bootstrap";
import TableCustom from "../../components/TableCustom";

import Sidebar from "../../components/Sidebar";
import Navibar from "../../components/Navibar";
// 랜덤 데이터를 생성해주는 faker 라이브러리
import faker from "faker/locale/ko";
faker.seed(100);
function RSH() {
  const columns = ["CompanyCode", "RshName", "Addr", "Phone"];
  // const [companyCode, setCompanyCode] = useState("");
  // const [rshName, setRshName] = useState("");
  // const [addr, setAddr] = useState("");
  // const [phone, setPhone] = useState("");

  // function getData() {
  //   console.log();
  // }
  const data = Array(15)
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
      <div className="parent">
        <Sidebar className="child" />
        <div
          style={{
            marginTop: "7vh",
            marginLeft: "10px",
            marginRight: "10px",
            width: "100%",
          }}
        >
          {/* <Table striped bordered hover variant="dark"> */}
          {/* <Table striped bordered hover>
            <thead>
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
                  번호
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>100000</td>
                <td>00 육묘장</td>
                <td>000도 00시 00구 00동 000</td>
                <td>063-000-0000</td>
              </tr>
              <tr>
                <td>2</td>
                <td>100000</td>
                <td>00 육묘장</td>
                <td>000도 00시 00구 00동 000</td>
                <td>063-000-0000</td>
              </tr>
              <tr>
                <td>3</td>
                <td>100000</td>
                <td>00 육묘장</td>
                <td>000도 00시 00구 00동 000</td>
                <td>063-000-0000</td>
              </tr>
              <tr>
                <td>4</td>
                <td>100000</td>
                <td>00 육묘장</td>
                <td>000도 00시 00구 00동 000</td>
                <td>063-000-0000</td>
              </tr>
            </tbody>
          </Table> */}

          <div style={{ height: "35vh", overflow: "scroll" }}>
            <TableCustom columns={columns} data={data} />
          </div>
          <hr></hr>
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
    </>
  );
}

export default RSH;
