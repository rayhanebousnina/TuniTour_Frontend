import React, { useState, useEffect } from "react";
import { Button, Modal, Form, Col, Row, Image } from "react-bootstrap";
import Input from "../../Components/Modals/Input";
import { signup } from "../../Redux/Actions/userRegisterActions";
import { useSelector, useDispatch } from "react-redux";
import NavigationBar2 from "../../Components/Navbars/Navbar2";
import "./RegisterPage.css";
import Footer from "../../Components/Footer/Footer";

const RegisterPage = (props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [password, setPassword] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [profilePicture, setProfilePicture] = useState("");
  console.log("firstname", firstName);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  //   console.log("user", user);
  useEffect(() => {
    if (!user.loading) {
      setFirstName("");
      setLastname("");
      setEmail("");
      setBirthDate("");
      setPassword("");
      setContactNumber("");
      setProfilePicture("");
    }
  }, [user.loading]);

  const userSignup = (e) => {
    e.preventDefault();

    const user = {
      firstName,
      lastName,
      email,
      birthDate,
      password,
      contactNumber,
      profilePicture,
    };

    dispatch(signup(user));
  };
  return (
    <div>
      {/* Navigation bar */}
      <NavigationBar2 />
      <div className="container py-5">
        <Row>
          <Col md={6}>
            <div id="image-bck">
              <h1 className="quote">
                Travel<br></br>You're not a tree{" "}
              </h1>
            </div>
            {/* <Image fluid className="image-style" src={imgsignup} /> */}
          </Col>
          <Col md={6}>
            <Form onSubmit={userSignup} id="Form">
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
                type="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              <Button type="submit" variant="light" className="btn-signup">
                Register Now
              </Button>
            </Form>
          </Col>
        </Row>
      </div>
      <div className="border-footer">
        <Footer />
      </div>
    </div>
  );
};

export default RegisterPage;
