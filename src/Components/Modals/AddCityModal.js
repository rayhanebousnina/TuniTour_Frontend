import React, { useState } from "react";
import { Button, Modal, Form, Col, Row } from "react-bootstrap";
import { newCity } from "../../Redux/Actions/cityActions";
import { useSelector, useDispatch } from "react-redux";

const AddCityModal = () => {
  // Modal State
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //Add new city State
  const initialCityState = {
    name: "",
    image: "",
    description: "",
  };

  const [city, setCity] = useState(initialCityState);

  const dispatch = useDispatch();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCity({
      ...city,
      [name]: value,
    });
    console.log("add new city", city);
  };

  const addCity = () => {
    const { name, image, description } = city;

    dispatch(newCity(name, image, description));
  };

  return (
    <div>
      <div onClick={handleShow}>
        <Button variant="success">Add New City</Button>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add new city</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Row className="mb-3 mx-1">
              <Form.Control
                value={city.name}
                onChange={handleInputChange}
                name="name"
                placeholder="City Name"
              />
            </Row>
            <Row className="mb-3 mx-1">
              <Form.Control
                value={city.description}
                onChange={handleInputChange}
                name="description"
                placeholder="City Description"
              />
            </Row>
            <Row className="mb-3 mx-1">
              <Form.Control
                value={city.image}
                onChange={handleInputChange}
                name="image"
                placeholder="City Image"
                type="file"
              />
            </Row>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="info" onClick={() => addCity()}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AddCityModal;
