import React, { useState } from "react";
import { Button, Modal, Form, Col, Row } from "react-bootstrap";
import { newService } from "../../Redux/Actions/serviceActions";
import { useSelector, useDispatch } from "react-redux";

const AddServiceModal = () => {
  // Modal State
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //Add new service State
  const initialServiceState = {
    name: "",
    image: "",
    description: "",
    address: "",
    working_hours: "",
    phone: "",
    price: "",
    location: "",
    category: "",
  };

  const [service, setService] = useState(initialServiceState);

  const dispatch = useDispatch();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setService({
      ...service,
      [name]: value,
    });
    console.log("add new service", service);
  };

  const addService = () => {
    const {
      name,
      image,
      description,
      address,
      working_hours,
      phone,
      price,
      location,
      category,
    } = service;

    dispatch(
      newService(
        name,
        image,
        description,
        address,
        working_hours,
        phone,
        price,
        location,
        category
      )
    );
  };

  return (
    <div>
      <div onClick={handleShow}>
        <Button variant="success">Add New Service</Button>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add new city</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Row className="mb-3 mx-1">
              <Form.Control
                value={service.name}
                onChange={handleInputChange}
                name="name"
                placeholder="Service Name"
              />
            </Row>
            <Row className="mb-3 mx-1">
              <Form.Control
                value={service.description}
                onChange={handleInputChange}
                name="description"
                placeholder="Service Description"
                type="text"
              />
            </Row>
            <Row className="mb-3 mx-1">
              <Form.Control
                value={service.image}
                onChange={handleInputChange}
                name="image"
                placeholder="Service Image"
                type="file"
              />
            </Row>
            <Row className="mb-3 mx-1">
              <Form.Control
                value={service.address}
                onChange={handleInputChange}
                name="address"
                placeholder="Service Address"
                type="text"
              />
            </Row>
            <Row className="mb-3 mx-1">
              <Form.Control
                value={service.working_hours}
                onChange={handleInputChange}
                name="working_hours"
                placeholder="Service Working Hours"
                type="text"
              />
            </Row>
            <Row className="mb-3 mx-1">
              <Form.Control
                value={service.phone}
                onChange={handleInputChange}
                name="phone"
                placeholder="Service Phone"
                type="text"
              />
            </Row>
            <Row className="mb-3 mx-1">
              <Form.Control
                value={service.price}
                onChange={handleInputChange}
                name="price"
                placeholder="Service Price"
                type="text"
              />
            </Row>
            <Row className="mb-3 mx-1">
              <Form.Control
                value={service.location}
                onChange={handleInputChange}
                name="location"
                placeholder="Service Location"
                type="text"
              />
            </Row>
            <Row className="mb-3 mx-1">
              <Form.Control
                value={service.category}
                onChange={handleInputChange}
                name="category"
                placeholder="Service Category"
                type="text"
              />
            </Row>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="info" onClick={() => addService()}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AddServiceModal;
