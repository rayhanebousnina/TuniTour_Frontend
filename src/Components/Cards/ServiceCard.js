import React, { useEffect } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getServices } from "../../Redux/Actions/serviceActions";

const ServiceCard = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getServices());
  }, [dispatch]);

  const services = useSelector((state) => state.servicesReducer.services);
  console.log("allservices", services);

  return (
    <div>
      {services.map((el, key) => (
        <div key={key}>
          <h1>{el.serviceName}</h1>
          <Link to={`/service/${el._id}`} id={el._id}>
            <Button>Service Details</Button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ServiceCard;
