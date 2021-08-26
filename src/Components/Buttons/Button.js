import React, {useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, NavDropdown } from "react-bootstrap";
import { FaUserCircle, FaBars } from "react-icons/fa";
import "./Button.css";
import RegisterModal from "../Modals/RegisterModal";
import LoginModal from "../Modals/LoginModal";

const ButtonNav = () => {

  
 
  return (
    <div className="dropdown">      
      <Button className="btn_nav" variant="light">        
        <FaBars className="FaBars" /> <FaUserCircle className="FaUserCircle" />
      </Button>
      <div className="dropdown-content">
          <NavDropdown.Item>           
            <RegisterModal/>
          </NavDropdown.Item>
          
          <NavDropdown.Item>
            <LoginModal/>
          </NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item>Help</NavDropdown.Item>
      </div>
    </div>
  );
};

export default ButtonNav;

