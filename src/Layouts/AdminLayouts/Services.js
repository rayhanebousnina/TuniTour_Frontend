import React, { useEffect } from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { getServices } from "../../Redux/Actions/serviceActions";
import AddServiceModal from "../../Components/Modals/AddServiceModal";
// import "./Services.css";

const Services = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getServices());
  }, [dispatch]);

  const services = useSelector((state) => state.servicesReducer.services);
  console.log("services", services);

  return (
    <Container>
      <Row>
        <Col md={3} sm={0} xs={0}></Col>
        <Col md={9} sm={12} xs={12}>
          <Row className="my-5">
            <AddServiceModal />
          </Row>
          <Row className="my-5">
            {services.map((el, key) => (
              <Col md={4} sm={6} xs={12}>
                <Card key={key}>
                  <Card.Img
                    fluid
                    variant="top"
                    className=""
                    src={el.serviceImage}
                  />
                  <Card.Body>
                    <Card.Title>{el.serviceName}</Card.Title>
                    <Card.Text>{el.serviceDescription}</Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Services;
