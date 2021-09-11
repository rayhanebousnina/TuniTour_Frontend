import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import { Button, Modal, Form, Col, Row } from "react-bootstrap";
import Input from "../../Components/Modals/Input";
import { login } from "../../Redux/Actions/userLoginActions";
import { useSelector, useDispatch } from "react-redux";
import NavigationBar2 from "../../Components/Navbars/Navbar2";
import "./RegisterPage.css";
import Footer from "../../Components/Footer/Footer";

const LoginPage = (props) => {
  const [email, setEmail] = useState("");
  const [hash_password, setHashPassword] = useState("");

  const auth = useSelector((state) => state.userLoginReducer);
  const dispatch = useDispatch();

  const userLogin = (e) => {
    e.preventDefault();

    const user = {
      email,
      hash_password,
    };

    dispatch(login(user));
  };

  if (auth.authenticate) {
    return <Redirect to={`/home`} />;
  }

  return (
    <div>
      <NavigationBar2 />
      <div className="container py-5">
        <Row>
          <Col md={6}>
            <div id="image-bck">
              <h1 className="quote">
                Travel<br></br>You're not a tree
              </h1>
            </div>
          </Col>
          <Col>
            <Form onSubmit={userLogin}>
              <Input
                placeholder="Email"
                type="text"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />

              <Input
                placeholder="Password"
                type="password"
                value={hash_password}
                onChange={(e) => {
                  setHashPassword(e.target.value);
                }}
              />
              <Button type="submit" variant="light" className="btn-signup">
                Login Now
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

export default LoginPage;
