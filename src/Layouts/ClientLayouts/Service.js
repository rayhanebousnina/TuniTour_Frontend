import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";
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
      <div className="">
        {/* Navigation bar */}
        <NavigationBar2 />
        <Container className="">
          <Row>
            <Col className="mt-5" md={{ span: 8, offset: 4 }}>
              <h2>{service.serviceName} </h2>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Service;
