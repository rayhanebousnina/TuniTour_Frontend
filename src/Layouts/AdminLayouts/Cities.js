import React, { useEffect } from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { getCities } from "../../Redux/Actions/cityActions";
import AddCityModal from "../../Components/Modals/AddCityModal";
import "./Cities.css";

const Cities = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCities());
  }, [dispatch]);

  const cities = useSelector((state) => state.citiesReducer.cities);
  console.log("cities", cities);

  return (
    <Container>
      <Row>
        <Col md={3} sm={0} xs={0}></Col>
        <Col md={9} sm={12} xs={12}>
          <Row className="my-5">
            <AddCityModal />
          </Row>
          <Row className="my-5">
            {cities.map((el, key) => (
              <Col md={4} sm={6} xs={12}>
                <Card key={key}>
                  <Card.Img
                    fluid
                    variant="top"
                    className="city_img"
                    src={el.cityImage}
                  />
                  <Card.Body>
                    <Card.Title>{el.cityName}</Card.Title>
                    <Card.Text>{}</Card.Text>
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

export default Cities;
