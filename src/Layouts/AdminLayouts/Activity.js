import React from "react";
import * as FaIcons from 'react-icons/fa';
import {Container, Row, Col, Image, Button, Card } from "react-bootstrap";
import './Dashboard.css'

const Activity = () => {
  return (
    <Container>
      <Row>
        <Col md={3} sm={2} xs={2}></Col>
        <Col md={6} sm={6} xs={6} className="my-4">
          <h1>All activities</h1>
        </Col>
        <Col md={3} sm={4} xs={4} className="my-4">
          <Button className="add_btn" variant="success">
            <FaIcons.FaPlusCircle />
          </Button>
        </Col>
      </Row>
      <Row>
        <Col md={3}></Col>
        <Col md={4} sm={6} xs={12} className="d-flex justify-content-center">
          <Card className="my-3" style={{ width: "16rem" }}>
            <Card.Img
              variant="top"
              src="https://checkyeti.imgix.net/images/optimized/stand-up-paddle-board-rental-agios-georgios-crazy-sports-cover.jpg"
            />
            <Card.Body>
              <Card.Title>Paddle Lucky Boy Club</Card.Title>
              <Card.Text>
                Sport nautique consistant à se déplacer debout sur une planche à
                l'aide d'une pagaie.
              </Card.Text>
              <div className="d-flex justify-content-between">
                <Button variant="warning">Update</Button>
                <Button variant="danger">Delete</Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} sm={6} xs={12} className="d-flex justify-content-center">
          <Card className="my-3" style={{ width: "16rem" }}>
            <Card.Img
              variant="top"
              src="https://checkyeti.imgix.net/images/optimized/stand-up-paddle-board-rental-agios-georgios-crazy-sports-cover.jpg"
            />
            <Card.Body>
              <Card.Title>Paddle Lucky Boy Club</Card.Title>
              <Card.Text>
                Sport nautique consistant à se déplacer debout sur une planche à
                l'aide d'une pagaie.
              </Card.Text>
              <div className="d-flex justify-content-between">
                <Button variant="warning">Update</Button>
                <Button variant="danger">Delete</Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Activity;
