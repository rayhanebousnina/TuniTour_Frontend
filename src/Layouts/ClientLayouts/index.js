import React, { useEffect } from "react";
import { Container, Col, Row, Image, Button } from "react-bootstrap";
import Btn from "../../Components/Buttons/ButtonDiscover";
import NavigationBar from "../../Components/Navbars/Navbar";
import Searchbar from "../../Components/Searchbars/Searchbar";
import Carousel from "../../Components/Carousels/Carousel";
import "./index.css";
import a from "../../Assets/a.jpg";
import b from "../../Assets/b.jpg";
import c from "../../Assets/c.jpg";
import CarouselFluid from "../../Components/Carousels/CarouselFluid";
import Footer from "../../Components/Footer/Footer";
import ServiceCard from "../../Components/Cards/ServiceCard";

const Home = () => {
  return (
    <div>
      {/* Landing section */}
      <div className="landing_section">
        {/* Navigation bar */}
        <NavigationBar />
        <Container>
          <Row className="mt-5 text-center">
            <h1>This is your guide</h1>
          </Row>
        </Container>
        <Container className="landing_section_content">
          <Row>
            <Col md={{ span: 6, offset: 3 }}>
              <Searchbar />
            </Col>
          </Row>
          <Row className="title_section">
            <Col md={{ span: 6, offset: 3 }}>
              <h2 className="title">Have no idea where to go ?</h2>
              <Btn />
            </Col>
          </Row>
        </Container>
      </div>
      {/* Explore the cities section */}
      <div>
        <Container className="my-5">
          <h1>Explore the cities</h1>
          {/* Carousel */}
          <Carousel />
        </Container>
      </div>

      {/* Services section */}
      <div className="Service_section">
        <Container className="py-5">
          <h1>Find different activities and places to discover</h1>
          {/* Service card */}
          <ServiceCard />
        </Container>
      </div>
      {/* Categories section */}
      <div className="my-5">
        <Container>
          <h1>What kind of entertainment do you want ?</h1>
          <Row className="my-5">
            <Col
              className="d-flex justify-content-center category_card"
              md={4}
              sm={12}
              xs={12}
            >
              <Image fluid className="category_img" src={a} rounded />
              <div className="category_title h3">Make an escape</div>
            </Col>
            <Col
              className="d-flex justify-content-center category_card"
              md={4}
              sm={12}
              xs={12}
            >
              <Image fluid className="category_img" src={b} rounded />
              <div className="category_title h3">Discover activities</div>
            </Col>
            <Col
              className="d-flex justify-content-center category_card"
              md={4}
              sm={12}
              xs={12}
            >
              <Image fluid className="category_img" src={c} rounded />
              <div className="category_title h3">Culture discover</div>
            </Col>
          </Row>
          <Row className="my-5">
            <Col
              className="d-flex justify-content-center category_card"
              md={4}
              sm={12}
              xs={12}
            >
              <Image fluid className="category_img" src={a} rounded />
              <div className="category_title h3">Take a coffee break</div>
            </Col>
            <Col
              className="d-flex justify-content-center category_card"
              md={4}
              sm={12}
              xs={12}
            >
              <Image fluid className="category_img" src={b} rounded />
              <div className="category_title h3">Relaxation centers</div>
            </Col>
            <Col
              className="d-flex justify-content-center category_card"
              md={4}
              sm={12}
              xs={12}
            >
              <Image fluid className="category_img" src={c} rounded />
              <div className="category_title h3">Go to cinemas</div>
            </Col>
          </Row>
        </Container>
      </div>
      {/* How it works section */}
      <div>
        <Container fluid className="howitworks_section pt-5">
          <h1>How it works ?</h1>
          <p>
            Book experiences to keep exploring what you discovered inside,
            outside.
          </p>
          <Button className="find_out_btn">Find out more</Button>
        </Container>
      </div>
      {/* Footer */}
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
