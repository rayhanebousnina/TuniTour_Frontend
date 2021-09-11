import React, { useState, useEffect } from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { getServices } from "../../Redux/Actions/serviceActions";
import AddServiceModal from "../../Components/Modals/AddServiceModal";
import axios from "axios";
// import "./Services.css";

const Services = () => {
  /*  const [services, setService] = useState([]);
  
  const fetchServices = () =>
    axios
      .get("http://localhost:4000/home/allservices", {
        Accept: "application/json",
        "Content-Type": "application/json",
      })
      .then((res) => setService(res.data));
  useEffect(() => {
    fetchServices();
  }, []);
  console.log("services hhh", services);
  */

  const dispatch = useDispatch();
  const services = useSelector((state) => state.servicesReducer.services);
  console.log("fafafafa", services);
  useEffect(() => {
    console.log("ddd", getServices());
    dispatch(getServices());
  }, []);

  return (
    <Container>
      <Row>
        <Col>
          <Row className="my-5">
            <AddServiceModal />
          </Row>

          <Row className="my-5">
            {services.map((el, key) => (
              <Col md={4} sm={6} xs={12} className="py-3">
                <Card key={key}>
                  <Card.Img
                    fluid
                    variant="top"
                    className=""
                    src={el.serviceImage}
                  />
                  <Card.Body>
                    <Card.Title>{el.serviceName}</Card.Title>
                    <Card.Text>{el.serviceLocation}</Card.Text>
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
