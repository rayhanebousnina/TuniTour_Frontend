import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { signout } from "../../Redux/Actions/userLoginActions";
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
  Button,
} from "react-bootstrap";
import { FaGlobeAmericas, FaHeart } from "react-icons/fa";
import logo from "../../Assets/TuniTourLogo.png";
import "./Navbar.css";

const NavigationBar = () => {
  const user = useSelector((state) => state.userLoginReducer);
  const dispatch = useDispatch();
  const logout = () => {
    dispatch(signout());
  };

  const userLogout = () => {
    window.location.reload(logout());
  };

  const notLoggedIn = () => {
    return (
      <Navbar className="nav" bg="transparent" expand="lg">
        <Container>
          <Navbar.Brand href="/home">
            <Image fluid src={logo} className="logo_style" />
          </Navbar.Brand>
          <h3 className="name_style">
            <span className="T">T</span>uni<span className="T">T</span>our
          </h3>
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
    );
  };
  const LoggedIn = () => {
    return (
      <Navbar className="nav" bg="transparent" expand="lg">
        <Container>
          <Navbar.Brand href="/home">
            <Image fluid src={logo} className="logo_style" />
          </Navbar.Brand>
          <h3 className="name_style">
            <span className="T">T</span>uni<span className="T">T</span>our
          </h3>
          <Nav className="ms-auto nav_items">
            <Nav.Link href="#link" className="mr_nav_item">
              <FaHeart /> Wishlist
            </Nav.Link>
            <Button className="logout_btn" onClick={userLogout}>
              <i class="fas fa-sign-out-alt"></i>
            </Button>
          </Nav>
        </Container>
      </Navbar>
    );
  };

  const nav = () => {
    {
      if (user.authenticate) {
        return LoggedIn();
      } else {
        return notLoggedIn();
      }
    }
  };
  return <div>{nav()}</div>;
};

export default NavigationBar;
