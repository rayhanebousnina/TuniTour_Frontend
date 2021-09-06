import React, { useState } from "react";
import { Button, Modal, Form, Col, Row } from "react-bootstrap";

const RegisterModal = () => {
  // Modal State
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <div onClick={handleShow}>Sign Up</div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Sign Up</Modal.Title>
        </Modal.Header>
        <Form.Text className="text-muted mx-5">
          Create your account. It's free and takes few minutes.
        </Form.Text>
        <Modal.Body>
          <Form>
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
              <Form.Control placeholder="Password" type="password" />
            </Row>
            {/* <Row className="mb-3 mx-1">
                        <Form.Control placeholder="Confirm Password" type="password"/>
                    </Row> */}
            <Row className="mb-3 mx-1">
              <Form.Check
                label="I accept the Terms of Use & Privacy Policy"
                type="checkbox"
              />
            </Row>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="info" onClick={handleClose}>
            Register Now
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default RegisterModal;
