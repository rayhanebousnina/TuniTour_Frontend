import React from "react";
import {
  Container,
  Row,
  Col,
  InputGroup,
  FormControl,
  Button,
  Image,
} from "react-bootstrap";
import "./Footer.css";
import logo from "../../Assets/TuniTour.png";
import googlepaly from "../../Assets/download-on-the-app-store-apple.png";
import applestore from "../../Assets/en_badge_web_generic.png";
import { Link } from "react-router-dom";
import { FaFacebookSquare, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <Container className="footer_style pt-5">
        <Row className="pt-2">
          <Col
            className="d-flex justify-content-center mb-5"
            md={4}
            sm={12}
            xs={12}
          >
            <Container className="ms-3">
              <Row className="d-flex justify-content-center mb-2">
                <img className="logo" src={logo} />
              </Row>
              <Row className="d-flex justify-content-center">
                TuniTour is a tour guide <br /> to discover the beauty of
                tunisian cities.
              </Row>
            </Container>
          </Col>
          <Col
            className="d-flex justify-content-center mb-5"
            md={4}
            sm={12}
            xs={12}
          >
            <Container className="">
              <Row className="mb-3">
                <h4>Useful links</h4>
              </Row>
              <Row>
                <ul>
                  <li className="mb-3">
                    <Link className="useful_link" to="/home">
                      Home
                    </Link>
                  </li>
                  <li className="mb-3">
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
            <Container className="">
              <Row className="mb-3">
                <h4>Find Us</h4>
              </Row>
              <Row>
                <Image src={googlepaly} />
              </Row>
              <Row className="mt-2">
                <Image src={applestore} />
              </Row>
              <Row className="mt-3 text-center">
                <Col className="circle">
                  <FaFacebookSquare />
                </Col>
                <Col>
                  <FaTwitter />
                </Col>
                <Col>
                  <FaInstagram />
                </Col>
              </Row>
            </Container>
          </Col>
          <Col md={4} sm={12} xs={12}>
            <div className="mb-4">
              <h4>Your travel journey starts here</h4>
            </div>

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
          <Col className="d-flex justify-content-center">
            <p>
              Copyright <i class="far fa-copyright"></i> 2021 Office National du
              Tourisme Tunisien
            </p>
          </Col>
        </Row>
      </Container> */}
    </>
  );
};

export default Footer;
