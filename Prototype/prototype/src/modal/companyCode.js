import { React } from "react";
import { Button, Modal, Container, Row, Col } from "react-bootstrap";

function CompanyCode({ getdata, show, onHide }) {
  function sendCompanyName(e) {
    getdata(e.target.innerText);
  }

  return (
    <Modal show={show} aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">회사코드</Modal.Title>
      </Modal.Header>
      <Modal.Body className="show-grid">
        <Container>
          <Row
            style={{
              backgroundColor: "black",
              color: "white",
              textAlign: "center",
              fontSize: "17px",
              height: "40px",
              alignItems: "center",
            }}
          >
            <Col>회사명</Col>
            <Col>회사코드</Col>
          </Row>
          <Row
            style={{
              backgroundColor: "#D3D3D3",
              textAlign: "center",
              color: "black",
              height: "50px",
              alignItems: "center",
            }}
          >
            <Col>A</Col>
            <Col>
              <Button
                variant="outline-light"
                style={{ border: "0px", width: "100%" }}
                onClick={sendCompanyName}
              >
                100000
              </Button>
            </Col>
          </Row>
          <Row
            style={{
              backgroundColor: "#DCDCDC",
              textAlign: "center",
              color: "black",
              height: "50px",
              alignItems: "center",
            }}
          >
            <Col>B</Col>
            <Col>
              <Button
                variant="outline-secondary"
                style={{ border: "0px", width: "100%" }}
                onClick={sendCompanyName}
              >
                200000
              </Button>
            </Col>
          </Row>
          <Row
            style={{
              backgroundColor: "#D3D3D3",
              textAlign: "center",
              color: "black",
              height: "50px",
              alignItems: "center",
            }}
          >
            <Col>C</Col>
            <Col>
              <Button
                variant="outline-dark"
                style={{ border: "0px", width: "100%" }}
                onClick={sendCompanyName}
              >
                300000
              </Button>
            </Col>
          </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Row style={{ width: "100%" }}>
          <Col md="9">
            <p style={{ color: "gray", fontSize: "13px" }}>
              회사 코드를 클릭하고 선택버튼을 눌러주세요
            </p>
          </Col>
          <Col md="1">
            <Button variant="dark" onClick={onHide} style={{ width: "100px" }}>
              선택
            </Button>
          </Col>
        </Row>
      </Modal.Footer>
    </Modal>
  );
}

export default CompanyCode;
