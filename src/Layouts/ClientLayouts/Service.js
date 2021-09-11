import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Container, Row, Col, Image, Card, Button } from "react-bootstrap";
import NavigationBar2 from "../../Components/Navbars/Navbar2";
import "./Service.css";
import { getServiceById } from "../../Redux/Actions/serviceActions";

const Service = () => {
  const dispatch = useDispatch();

  const { id } = useParams();
  useEffect(() => {
    dispatch(getServiceById(id));
  }, [dispatch, id]);

  const service = useSelector((state) => state.servicesReducer.service);
  const services = useSelector((state) => state.servicesReducer.services);
  console.log("service", service);
  console.log("all services", services);
  return (
    <div>
      {/* Landing service section */}
      <div className="service_hero_section">
        {/* Navigation bar */}
        <NavigationBar2 />
        <Image fluid src={service.serviceImage} className="service_img" />
        <Container className="services_container">
          <Row>
            <Col className="mt-2 text-center" md={12}>
              <h2 className="service_title">{service.serviceName} </h2>
            </Col>
          </Row>
          {/* Service Details */}
          <Row className="my-5">
            <Col className="text-center">
              <h3>DESCRIPTION</h3>
              {service.serviceDescription}
            </Col>
            <Col>
              <Container className="service_box_info">
                <Row className="my-5">
                  <Col md={{ span: 6, offset: 3 }}>
                    <span class="hint-star star">
                      <i class="fa fa-star" aria-hidden="true"></i>
                      <i class="fa fa-star" aria-hidden="true"></i>
                      <i class="fa fa-star" aria-hidden="true"></i>
                      <i class="fa fa-star" aria-hidden="true"></i>
                      <i class="fa fa-star-o" aria-hidden="true"></i>
                    </span>
                    <h4>146 avis</h4>
                  </Col>
                </Row>
                <Row className="my-3">
                  <Col md={2}>
                    <i class="fas fa-tags"></i>
                  </Col>
                  <Col md={10}>
                    <div>{service.servicePrice} DNT</div>
                  </Col>
                </Row>
                <Row className="my-3">
                  <Col md={2}>
                    <i class="fas fa-phone-square-alt"></i>
                  </Col>
                  <Col md={10}>
                    <div>{service.servicePhone}</div>
                  </Col>
                </Row>
                <Row className="my-3">
                  <Col md={2}>
                    <i class="fas fa-clock"></i>
                  </Col>
                  <Col md={10}>
                    <div>{service.serviceWorkingHours}</div>
                  </Col>
                </Row>
                <Row className="my-3">
                  <Col md={2}>
                    <i class="fas fa-map-marked-alt"></i>
                  </Col>
                  <Col md={10}>
                    <div>{service.serviceAddress}</div>
                  </Col>
                </Row>
              </Container>
            </Col>
          </Row>
          {/* other services */}
          <Row className="my-5">
            <h1>You may like these</h1>
          </Row>
          <Row className="text-center">
            {services.map((el, key) => (
              <Col md={4} sm={6} xs={12}>
                <Card style={{ width: "100%" }} className="mr-3">
                  <Card.Img variant="top" src={el.serviceImage} />
                  <Card.Body>
                    <Card.Title>{el.serviceName}</Card.Title>
                    <Card.Text>{el.serviceDescription}</Card.Text>
                    <Button variant="danger">See details</Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Service;
