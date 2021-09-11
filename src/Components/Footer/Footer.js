import React from "react";
import {
  Container,
  Row,
  Col,
  InputGroup,
  FormControl,
  Button,
} from "react-bootstrap";
import "./Footer.css";
import logo from "../../Assets/TuniTour.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <Container className="footer_style pt-5">
        <Row className="pt-3">
          <Col
            className="d-flex justify-content-center mb-5"
            md={4}
            sm={12}
            xs={12}
          >
            <img className="logo" src={logo} />
          </Col>
          <Col
            className="d-flex justify-content-center mb-5"
            md={4}
            sm={12}
            xs={12}
          >
            <Container className="text-center">
              <Row>
                <h4>Useful links</h4>
              </Row>
              <Row>
                <ul>
                  <li>
                    <Link className="useful_link" to="/home">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link className="useful_link" to="/explorecities">
                      Cities
                    </Link>
                  </li>
                  <li>
                    <Link className="useful_link" to="/categories">
                      Categories
                    </Link>
                  </li>
                </ul>
              </Row>
            </Container>
          </Col>
          <Col md={4} sm={12} xs={12}>
            <h4>Your travel journey starts here</h4>
            <p>
              Subscribe now for travel tips, personalized itineraries, and
              vacation inspiration straight to your inbox.
            </p>
            <InputGroup className="my-5">
              <FormControl
                className="subscribe_input"
                placeholder="Your email"
                aria-label="Your email"
                aria-describedby="basic-addon2"
              />
              <Button className="subscribe_btn" id="button-addon2">
                Subscribe
              </Button>
            </InputGroup>
          </Col>
        </Row>
      </Container>
      {/* <Container fluid className="text-center">
        <Row className="copyright_section">
          <Col>
            <i class="far fa-copyright"></i>
          </Col>
          <Col>
            <pre>
              Legal notice·Terms·Privacy·Cookies{" "}
              <i class="fab fa-facebook-f"></i>
              <i class="fab fa-instagram"></i>
              <i class="fab fa-twitter"></i>
              <i class="fab fa-youtube"></i>
            </pre>
          </Col>
        </Row>
      </Container> */}
    </>
  );
};

export default Footer;
