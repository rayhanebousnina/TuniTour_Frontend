import React, { useState, useEffect } from "react";
import { Button, Modal, Form, Col, Row } from "react-bootstrap";
import Input from "./Input";
import { signup } from "../../Redux/Actions/userRegisterActions";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";

const RegisterModal = (props) => {
  // Modal State
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  //

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [hash_password, setHash_password] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [profilePicture, setProfilePicture] = useState("");

  const userReg = useSelector((state) => state.userRegisterReducer);
  const userLog = useSelector((state) => state.userLoginReducer);
  const dispatch = useDispatch();
  console.log("user", userReg);
  useEffect(() => {
    if (!userReg.loading) {
      setFirstName("");
      setLastname("");
      setEmail("");
      setBirthDate("");
      setHash_password("");
      setContactNumber("");
      setProfilePicture("");
    }
  }, [userReg.loading]);

  const userSignup = (e) => {
    e.preventDefault();

    const user = {
      firstName,
      lastName,
      email,
      birthDate,
      hash_password,
      contactNumber,
      profilePicture,
    };

    dispatch(signup(user));
  };

  if (userLog.authenticate) {
    return <Redirect to={"/admin"} />;
  }
  if (userReg.loading) {
    return <p>Loading.....!</p>;
  }
  // if (user.loading) {
  //   return <p>loading</p>;
  // }
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
          <Form onSubmit={userSignup}>
            <Input
              placeholder="First name"
              type="text"
              value={firstName}
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
            />
            <Input
              placeholder="Last name"
              type="text"
              value={lastName}
              onChange={(e) => {
                setLastname(e.target.value);
              }}
            />
            <Input
              placeholder="Email"
              type="text"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <Input
              placeholder="Birth date"
              type="date"
              value={birthDate}
              onChange={(e) => {
                setBirthDate(e.target.value);
              }}
            />
            <Input
              placeholder="Phone number"
              type="number"
              value={contactNumber}
              onChange={(e) => {
                setContactNumber(e.target.value);
              }}
            />
            <Input
              placeholder="Profile picture"
              type="url"
              value={profilePicture}
              onChange={(e) => {
                setProfilePicture(e.target.value);
              }}
            />
            <Input
              placeholder="Password"
              type="hash_password"
              value={hash_password}
              onChange={(e) => {
                setHash_password(e.target.value);
              }}
            />
          </Form>

          {/*<Form>
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
              <Form.Control placeholder="Birth date" type="date" />
            </Row>
            <Row className="mb-3 mx-1">
              <Form.Control placeholder="Phone number" type="number" />
            </Row>
            <Row className="mb-3 mx-1">
              <Form.Control placeholder="Profile picture" />
            </Row>
            <Row className="mb-3 mx-1">
              <Form.Control placeholder="Password" type="password" />
            </Row>
            {/* <Row className="mb-3 mx-1">
                        <Form.Control placeholder="Confirm Password" type="password"/>
                    </Row> 
            <Row className="mb-3 mx-1">
              <Form.Check
                label="I accept the Terms of Use & Privacy Policy"
                type="checkbox"
              />
            </Row>
          </Form> */}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button type="submit" variant="info" onClick={handleClose}>
            Register Now
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default RegisterModal;
