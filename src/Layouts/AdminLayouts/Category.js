import React from "react";
import { Container, Row, Col, Image, Button, Card } from "react-bootstrap";
import escape from "../../Assets/escape.jpg";
import activity from "../../Assets/activity.jpg";
import spa from "../../Assets/spa.jpg";
import cinema from "../../Assets/cinema.jpg";
import coffee from "../../Assets/coffee.jpg";
import monument from "../../Assets/monument.jpg";

const Category = () => {
  return (
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
  );
};

export default Category;
