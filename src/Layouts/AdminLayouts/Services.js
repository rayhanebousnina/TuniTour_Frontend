import React, { useState, useEffect } from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { getServices, removeService } from "../../Redux/Actions/serviceActions";
import AddServiceModal from "../../Components/Modals/AddServiceModal";
import axios from "axios";
import UpdateServiceModal from "../../Components/Modals/UpdateServiceModal";
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
  console.log("rayhane", services);
  useEffect(() => {
    console.log("ddd", getServices());
    dispatch(getServices());
  }, []);

  const deleteItem = (id) => {
    dispatch(removeService(id));
    console.log("service deleted", id);
  };

  function limit(string = "", limit = 0) {
    return string.substring(0, limit);
  }
  return (
    <Container>
      <Row>
        <Col>
          <Row className="my-5">
            <Col md={3}>
              <AddServiceModal />
            </Col>
          </Row>

          <Row className="my-5">
            {services.map((el, key) => (
              <Col md={4} sm={6} xs={12} key={key} className="py-3">
                <Card key={key}>
                  <Card.Img
                    fluid
                    variant="top"
                    className=""
                    src={el.serviceImage}
                  />
                  <Card.Body>
                    <Card.Title>{el.serviceName}</Card.Title>
                    <Card.Text>
                      <p>{el.serviceLocation}</p>
                      <p>{el.servicePrice} DNT</p>
                      <p>{limit(`${el.serviceDescription}`, 150)} ...</p>
                    </Card.Text>
                    <Row className="text-center">
                      <Col>
                        <UpdateServiceModal el={el} id={el._id} />
                      </Col>
                      <Col>
                        {" "}
                        <Button
                          variant="danger"
                          onClick={() => {
                            deleteItem(el._id);
                          }}
                        >
                          <i class="far fa-trash-alt"></i>
                        </Button>
                      </Col>
                    </Row>
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
