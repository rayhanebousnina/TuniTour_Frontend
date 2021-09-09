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
              <Container>
                <Row>
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
                    <i class="fas fa-tags fa-2x"></i>
                  </Col>
                  <Col md={10}>
                    <h5>{service.servicePrice} DNT</h5>
                  </Col>
                </Row>
              </Container>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default Service;
