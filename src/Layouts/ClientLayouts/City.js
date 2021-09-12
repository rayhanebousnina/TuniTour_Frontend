import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Container, Row, Col, Image, Card, Button } from "react-bootstrap";
import NavigationBar2 from "../../Components/Navbars/Navbar2";
import "./City.css";
import { getCityById } from "../../Redux/Actions/cityActions";
import Footer from "../../Components/Footer/Footer";
import MonastirData from "./metadata/Monastir.json";
import TunisData from "./metadata/Tunis.json";
import KairouanData from "./metadata/Kairaoun.json";
import DjerbaData from "./metadata/Djerba.json";
import SousseData from "./metadata/Sousse.json";
import HammametData from "./metadata/Hammamet.json";

const City = () => {
  const dispatch = useDispatch();

  const { id } = useParams();
  useEffect(() => {
    dispatch(getCityById(id));
  }, [dispatch, id]);

  const city = useSelector((state) => state.citiesReducer.city);
  const activities = useSelector((state) => state.servicesReducer.services);
  var servicesData = [];
  activities.forEach((element) => {
    if (element.serviceLocation == city.cityName) {
      servicesData.push(element);
    }
  });
  console.log("activitieeeeeesss", activities, servicesData);
  console.log("onecity", city);
  var myData = [
    {
      text1: "aaa",
    },
  ];
  function limit(string = "", limit = 0) {
    return string.substring(0, limit);
  }
  if (city.length !== 8) {
    var myCity = city.cityName;
    switch (myCity) {
      case "Tunis":
        myData = TunisData;
        break;
      case "Monastir":
        myData = MonastirData;
        break;
      case "Kairouan":
        myData = KairouanData;
        break;
      case "Djerba":
        myData = DjerbaData;
        break;
      case "Sousse":
        myData = SousseData;
        break;
      case "Hammamet":
        myData = HammametData;
        break;
    }
  } else {
    console.log("falseeeeee");
  }
  return (
    <div>
      {/* Landing city section */}
      <div className="landing_city_page">
        {/* Navigation bar */}
        <NavigationBar2 />
        <Image fluid src={city.cityImage} className="cityy_img" />
        <Container>
          <Row>
            <Col className="text-center" md={12}>
              <div className="cityy_title">
                <h2>{city.cityName} City</h2>
              </div>
            </Col>
          </Row>
          <Row>
            <Col className="py-4">
              <h2 className="text-center">{city.cityName} City</h2>
            </Col>
            <Col md={12} sm={12}>
              <p className="city-text">{city.cityDescription}</p>
            </Col>
          </Row>
          <Row>
            <Col>
              <h2 className="text-center py-4">Services</h2>
            </Col>
          </Row>
          <Row>
            {servicesData.map((el, key) => (
              <Col md={4} sm={6} xs={12} key={key} className="py-4">
                <Card key={key}>
                  <Card.Img
                    fluid
                    variant="top"
                    src={el.serviceImage}
                    style={{ height: "13rem" }}
                  />
                  <Card.Body>
                    <Card.Title>{el.serviceName}</Card.Title>
                    <Card.Text>
                      {limit(`${el.serviceDescription}`, 200)}
                    </Card.Text>
                    <Link
                      to={`/service/${el._id}`}
                      id={el._id}
                      className="text-center"
                    >
                      <Button variant="primary discover_btn ">
                        See details
                      </Button>
                    </Link>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
          <Row>
            <Col>
              <h2 className="text-center py-4">Gallery</h2>
            </Col>
          </Row>
          <Row>
            <Col md={6} sm={12}>
              <Image fluid src={myData[0].image1} className="py-1"></Image>
              <Image fluid src={myData[0].image2} className="py-1"></Image>
            </Col>
            <Col md={6} sm={12}>
              <Image fluid src={myData[0].image3} className="py-1"></Image>
              <Image fluid src={myData[0].image4} className="py-1"></Image>
            </Col>
          </Row>
        </Container>
        <div className="border-footer">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default City;
