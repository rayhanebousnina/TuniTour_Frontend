import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import { Button, Modal, Form, Col, Row } from "react-bootstrap";
import Input from "../../Components/Modals/Input";
import { login } from "../../Redux/Actions/userLoginActions";
import { useSelector, useDispatch } from "react-redux";

const LoginPage = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const user = useSelector((state) => state.userLoginReducer);
  const dispatch = useDispatch();

  const userLogin = (e) => {
    e.preventDefault();

    const user = {
      email,
      password,
    };

    dispatch(login(user));
  };

  if (user.authenticate) {
    return <Redirect to={`/home`} />;
  }

  return (
    <div>
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
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <Button type="submit" variant="info">
          Login Now
        </Button>
      </Form>
    </div>
  );
};

export default LoginPage;
