import React, { useEffect } from "react";
import { Image, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.min.css";
import "owl.carousel/dist/assets/owl.theme.default.min.css";
import "./Carousel.css";
import { getCities } from "../../Redux/Actions/cityActions";

const Carousel = () => {
  // OWL Options
  const options = {
    margin: 10,
    responsiveClass: true,
    nav: false,
    dots: true,
    autoplay: false,
    smartSpeed: 1000,
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 1,
      },
      600: {
        items: 2,
      },
      700: {
        items: 3,
      },
      1000: {
        items: 4,
      },
    },
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCities());
  }, [dispatch]);

  const cities = useSelector((state) => state.citiesReducer.cities);
  console.log("allciies", cities);

  return (
    <>
      {cities.length && (
        <OwlCarousel className="owl-theme" {...options}>
          {cities.map((el, key) => (
            <div className="item city_card" key={key}>
              <Image className="carousel_image city_img" src={el.cityImage} />
              <div className="city_title h3">
                {el.cityName}
                <Link to={`/city/${el._id}`} id={el._id}>
                  <Button>see details</Button>
                </Link>
              </div>
            </div>
          ))}
        </OwlCarousel>
      )}
    </>
  );
};

export default Carousel;
