import React from "react";
import { Container, Row, Col, Image, Button, Card } from "react-bootstrap";

const Category = () => {
  return (
    <Container>
      <Row>
        <Col md={3}></Col>
        <Col md={9} sm={6} xs={12}>
          <Card style={{ width: "26rem" }}>
            <Card.Img
              variant="top"
              src="http://www.ontarioparks.com/parksblog/wp-content/uploads/2018/03/Untitled-design-36-825x510.jpg"
            />
            <Card.Body>
              <Card.Text>
                You might plan some indoor activities for your trip.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Category;
