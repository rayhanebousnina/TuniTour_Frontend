import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Container, Row, Col, Image } from "react-bootstrap";
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
  console.log("onecity", city);
  var myData = [
    {
      text1: "aaa",
    },
  ];
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
            <Col className="py-4" md={{ span: 8, offset: 4 }}>
              <h2>{city.cityName} City</h2>
            </Col>
            <Col md={12} sm={12}>
              <p className="city-text">{city.cityDescription}</p>
            </Col>
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
