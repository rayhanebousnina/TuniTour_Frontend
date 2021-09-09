import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Container, Row, Col, Image, Card } from "react-bootstrap";
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
  console.log("service", service);

  return (
    <div>
      {/* Landing service section */}
      <div className="service_hero_section">
        {/* Navigation bar */}
        <NavigationBar2 />
        <Image fluid src={service.serviceImage} className="service_img" />
        <div className="services_container">
          <Row>
            <Col className="mt-2 text-center" md={12}>
              <h2 className="service_title">{service.serviceName} </h2>
              {console.log(service.serviceImage)}
            </Col>
          </Row>
          <Row className="my-5">
            <Col className="text-center">
              <h3>DESCRIPTION</h3>
              {service.serviceDescription}
            </Col>
            <Col>
              <Card border="light" style={{ width: "18rem" }}>
                <Card.Header>Header</Card.Header>
                <Card.Body>
                  <Card.Title>Light Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default Service;
