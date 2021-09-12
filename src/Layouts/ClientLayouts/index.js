import React, { useEffect } from "react";
import { Container, Col, Row, Image, Button } from "react-bootstrap";
import Btn from "../../Components/Buttons/ButtonDiscover";
import NavigationBar from "../../Components/Navbars/Navbar";
import Searchbar from "../../Components/Searchbars/Searchbar";
import Carousel from "../../Components/Carousels/Carousel";
import "./index.css";
import escape from "../../Assets/escape.jpg";
import activity from "../../Assets/activity.jpg";
import spa from "../../Assets/spa.jpg";
import cinema from "../../Assets/cinema.jpg";
import coffee from "../../Assets/coffee.jpg";
import monument from "../../Assets/monument.jpg";
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
        <div className="py-5 cities">
          <div className="ms-3">
            <h1 className="text-center">Explore the cities</h1>
          </div>

          {/* Carousel */}
          <Carousel />
        </div>
      </div>

      {/* Services section */}
      <div className="Service_section">
        <Container className="py-5">
          <h1 className="text-center">
            Find different activities and places to discover
          </h1>
          {/* Service card */}
          <ServiceCard />
        </Container>
      </div>
      {/* Categories section */}
      <div className="">
        <div className="titre-categories">
          <h1 className="text-center">
            What kind of entertainment do you want ?
          </h1>
        </div>

        <Container fluid className="p-0 m-0">
          <Row className="m-0 p-0">
            <Col className=" category_card p-0 m-0" md={4} sm={12} xs={12}>
              <Image fluid className="category_img" src={escape} />
              <div className="category_title h3">Make an escape</div>
            </Col>
            <Col className="category_card p-0 m-0" md={4} sm={12} xs={12}>
              <Image fluid className="category_img" src={activity} />
              <div className="category_title h3">Discover activities</div>
            </Col>
            <Col className=" category_card p-0 m-0" md={4} sm={12} xs={12}>
              <Image fluid className="category_img" src={monument} />
              <div className="category_title h3">Culture discover</div>
            </Col>
          </Row>
          <Row className="m-0 p-0">
            <Col className="category_card p-0 m-0" md={4} sm={12} xs={12}>
              <Image fluid className="category_img" src={coffee} />
              <div className="category_title h3">Take a coffee break</div>
            </Col>
            <Col className=" category_card p-0 m-0" md={4} sm={12} xs={12}>
              <Image fluid className="category_img" src={spa} />
              <div className="category_title h3">Relaxation centers</div>
            </Col>
            <Col className=" category_card p-0 m-0" md={4} sm={12} xs={12}>
              <Image fluid className="category_img" src={cinema} />
              <div className="category_title h3">Go to cinemas</div>
            </Col>
          </Row>
        </Container>
      </div>
      {/* How it works section */}
      <div>
        <Container fluid className="howitworks_section py-5">
          <br />
          <br />
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
