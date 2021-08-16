import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import { FaUserCircle, FaBars } from "react-icons/fa";
import "./Button.css";

const ButtonNav = () => {
  return (
    <div>      
      <Button className="btn_nav" variant="light">        
        <FaBars className="FaBars" /> <FaUserCircle className="FaUserCircle" />
      </Button>
    </div>
  );
};

export default ButtonNav;
