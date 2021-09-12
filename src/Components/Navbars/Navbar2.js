import React from "react";
import ButtonNav from "../Buttons/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Container,
  Col,
  Row,
  Navbar,
  Nav,
  NavDropdown,
  Image,
} from "react-bootstrap";
import { FaGlobeAmericas, FaHeart } from "react-icons/fa";
import MiniSearchbar from "../Searchbars/MiniSearchbar";
import logo from "../../Assets/TuniTour.png";
import "./Navbar.css";

const NavigationBar2 = () => {
  return (
    <div>
      <Navbar className="nav" bg="transparent" expand="lg">
        <Container fluid>
          <Navbar.Brand href="/home">
            <Image fluid src={logo} className="logo_style" />
          </Navbar.Brand>
          <MiniSearchbar />
          <Nav className="ms-auto nav_items">
            <NavDropdown
              title={<FaGlobeAmericas />}
              id="basic-nav-dropdown"
              className="mr_nav_item"
            >
              <NavDropdown.Item href="#action/3.1">Français</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Arabe</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <ButtonNav />
        </Container>
      </Navbar>
    </div>
  );
};

export default NavigationBar2;
