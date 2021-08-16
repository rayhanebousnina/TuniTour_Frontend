import React from "react";
import ButtonNav from '../Buttons/Button'
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Col, Row, Navbar, Nav, NavDropdown } from "react-bootstrap";
import { FaGlobeAmericas, FaHeart } from "react-icons/fa";
import './Navbar.css'

const NavigationBar2 = () => {
  return (
    <div>
      <Navbar className="nav" bg="transparent" expand="lg">
        <Container >
          <Navbar.Brand href="#home">TuniTour</Navbar.Brand>
          Search here
          <Nav className="ms-auto">
            <Nav.Link href="#link"><FaHeart/> Wishlist</Nav.Link>
            <NavDropdown title={<FaGlobeAmericas/>} id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Français</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Arabe</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <ButtonNav/>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavigationBar2;
