import React from "react";
import { Container, Form, Row, Col, Image } from "react-bootstrap";

const AdminAccount = () => {
  return (
    <Container>
      <Row>
        <Col className="d-flex justify-content-center" md={3} sm={12} xs={12}>
          <Image
            className="my-5"
            fluid
            roundedCircle
            src="https://www.tekoway.com/wp-content/uploads/2018/12/John-Doe.jpg"
          />
        </Col>
        <Col className="d-flex justify-content-center" md={9} sm={12} xs={12}>
          <Form className="my-5">
            <Row className="mb-3">
              <Col>
                <Form.Control placeholder="First name" />
              </Col>
              <Col>
                <Form.Control placeholder="Last name" />
              </Col>
            </Row>
            <Row className="mb-3 mx-1">
              <Form.Control placeholder="Email" />
            </Row>
            <Row className="mb-3 mx-1">
              <Form.Control placeholder="Old Password" type="password" />
            </Row>
            <Row className="mb-3 mx-1">
              <Form.Control placeholder="New Password" type="password" />
            </Row>
            <Row className="mb-3 mx-1">
              <Form.Control
                placeholder="Confirm New Password"
                type="password"
              />
            </Row>
          </Form>
        </Col>
      </Row>
      <Row>
        <Col className="d-flex justify-content-center" md={3} sm={12} xs={12}>
          <form>
            <input type="file" />
          </form>
        </Col>
      </Row>
    </Container>
  );
};

export default AdminAccount;
