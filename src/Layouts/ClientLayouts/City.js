import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Container, Row, Col, Image } from "react-bootstrap";
import NavigationBar2 from "../../Components/Navbars/Navbar2";
import "./City.css";
import { getCityById } from "../../Redux/Actions/cityActions";

const City = () => {
  const dispatch = useDispatch();

  const { id } = useParams();
  useEffect(() => {
    dispatch(getCityById(id));
  }, [dispatch, id]);

  const city = useSelector((state) => state.citiesReducer.city);
  console.log("onecity", city);

  return (
    <div>
      {/* Landing city section */}
      <div className="landing_city_page">
        {/* Navigation bar */}
        <NavigationBar2 />
        <Image fluid src={city.cityImage} className="service_img" />
        <Container className="">
          <Row>
            <Col className="mt-2 text-center" md={12}>
              <h2 className="service_title">{city.cityName} City</h2>
            </Col>
          </Row>
          <Row>
            <Col className="mt-5" md={{ span: 8, offset: 4 }}>
              <h2>{city.cityName} City</h2>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default City;
