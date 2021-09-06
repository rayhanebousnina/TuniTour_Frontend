import React, { useEffect } from "react";
import { Image } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.min.css";
import "owl.carousel/dist/assets/owl.theme.default.min.css";
import "./Carousel.css";
import { getCities } from "../../Redux/Actions/cityActions";

const Carousel = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCities());
  }, [dispatch]);

  const cities = useSelector((state) => state.citiesReducer.cities);
  console.log("cities", cities);
  return (
    <OwlCarousel
      className="owl-theme"
      items="4"
      autoPlay
      nav
      dots
      loop
      margin={10}
    >
      {cities.map((el, key) => (
        <div className="item" key={key}>
          <Image className="carousel_image" src={el.cityImage} />
        </div>
      ))}
    </OwlCarousel>
  );
};

export default Carousel;
