import React, { useEffect } from "react";
import { Button, Carousel, Image, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getServices } from "../../Redux/Actions/serviceActions";
import "./ServiceCard.css";

const ServiceCard = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getServices());
  }, [dispatch]);

  const services = useSelector((state) => state.servicesReducer.services);
  console.log("allservices", services);

  return (
    <div>
      {services.length && (
        <Carousel>
          {services.map((el, key) => (
            // <div key={key} className="my-5">
            //   <h4>{el.serviceName}</h4>
            //   <Link to={`/service/${el._id}`} id={el._id}>
            //     <Button>Service Details</Button>
            //   </Link>
            // </div>

            <Carousel.Item>
              <div id="container">
                <div class="product-details">
                  <h1>{el.serviceName}</h1>
                  <span class="hint-star star">
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star-o" aria-hidden="true"></i>
                  </span>

                  <p class="information">{el.serviceDescription}</p>

                  <div class="control">
                    <Link to={`/service/${el._id}`} id={el._id}>
                      <button class="btn_service_card">
                        <span class="price">{el.servicePrice} DNT</span>
                        <span class="shopping-cart">
                          <i class="fas fa-eye" aria-hidden="true"></i>
                        </span>
                        <span class="buy">Service Details</span>
                      </button>
                    </Link>
                  </div>
                </div>

                <div class="product-image">
                  <Image fluid src={el.serviceImage} alt="" />

                  <div class="info pt-5">
                    <h2> Description</h2>
                    <ul>
                      <li>
                        <strong>Phone : </strong>
                        {el.servicePhone}
                      </li>
                      <li>
                        <strong>Address : </strong>
                        {el.serviceAddress}
                      </li>
                      <li>
                        <strong>Working Hours: </strong>
                        {el.serviceWorkingHours}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      )}
    </div>
  );
};

export default ServiceCard;
