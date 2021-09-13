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

  function limit(string = "", limit = 0) {
    return string.substring(0, limit);
  }
  return (
    <Container>
      <Row>
        <Col>
          <Row className="my-5">
            <AddCityModal />
          </Row>
          <Row className="my-5">
            {cities.map((el, key) => (
              <Col md={4} sm={6} xs={12} className="py-3">
                <Card key={key} className="card-container">
                  <Card.Img
                    fluid
                    variant="top"
                    className="city_img"
                    src={el.cityImage}
                  />
                  <Card.Body className="card-body-style">
                    <Card.Title>{el.cityName}</Card.Title>

                    <Card.Text>
                      {limit(`${el.cityDescription}`, 110)} ...
                    </Card.Text>
                    <Row className="text-center">
                      <Col>
                        <Button variant="primary">
                          <i class="fas fa-edit"></i>
                        </Button>
                      </Col>
                      <Col>
                        <Button variant="danger">
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

export default Cities;
