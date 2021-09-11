import React, { useState } from "react";
import { Button, Modal, Form, Col, Row } from "react-bootstrap";
import { changeService } from "../../Redux/Actions/serviceActions";
import { useSelector, useDispatch } from "react-redux";

const UpdateServiceModal = ({ el, id }) => {
  const dispatch = useDispatch();

  //Update service State
  const [updateService, setUpdateService] = useState({
    serviceName: el.serviceName,
    serviceImage: el.serviceImage,
    serviceDescription: el.serviceDescription,
    serviceAddress: el.serviceAddress,
    serviceWorkingHours: el.serviceWorkingHours,
    servicePhone: el.servicePhone,
    servicePrice: el.servicePrice,
    serviceLocation: el.serviceLocation,
    serviceCategory: el.serviceCategory,
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUpdateService({
      ...updateService,
      [name]: value,
    });
    console.log("hello", updateService);
  };

  const updateItem = () => {
    dispatch(
      changeService(
        id,
        updateService.serviceName,
        updateService.serviceImage,
        updateService.serviceDescription,
        updateService.serviceAddress,
        updateService.serviceWorkingHours,
        updateService.servicePhone,
        updateService.servicePrice,
        updateService.serviceLocation,
        updateService.serviceCategory
      )
    );
  };
  // Modal State
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        Update Service
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Row className="mb-3 mx-1">
              <Form.Control
                onChange={handleInputChange}
                name="serviceName"
                placeholder="Service Name"
                type="text"
                defaultValue={el.serviceName}
              />
            </Row>
            <Row className="mb-3 mx-1">
              <Form.Control
                onChange={handleInputChange}
                name="serviceImage"
                placeholder="Service Image"
                type="text"
                defaultValue={el.serviceImage}
              />
            </Row>
            <Row className="mb-3 mx-1">
              <Form.Control
                onChange={handleInputChange}
                name="serviceDescription"
                placeholder="Service Description"
                type="text"
                defaultValue={el.serviceDescription}
              />
            </Row>
            <Row className="mb-3 mx-1">
              <Form.Control
                onChange={handleInputChange}
                name="serviceAddress"
                placeholder="Service Address"
                type="text"
                defaultValue={el.serviceAddress}
              />
            </Row>
            <Row className="mb-3 mx-1">
              <Form.Control
                onChange={handleInputChange}
                name="serviceWorkingHours"
                placeholder="Service Working Hours"
                type="text"
                defaultValue={el.serviceWorkingHours}
              />
            </Row>
            <Row className="mb-3 mx-1">
              <Form.Control
                onChange={handleInputChange}
                name="servicePhone"
                placeholder="Service Phone"
                type="text"
                defaultValue={el.servicePhone}
              />
            </Row>
            <Row className="mb-3 mx-1">
              <Form.Control
                onChange={handleInputChange}
                name="servicePrice"
                placeholder="Service Price"
                type="text"
                defaultValue={el.servicePrice}
              />
            </Row>
            <Row className="mb-3 mx-1">
              <Form.Control
                onChange={handleInputChange}
                name="serviceLocation"
                placeholder="Service Location"
                type="text"
                defaultValue={el.serviceLocation}
              />
            </Row>
            <Row className="mb-3 mx-1">
              <Form.Control
                onChange={handleInputChange}
                name="serviceCategory"
                placeholder="Service Category"
                type="text"
                defaultValue={el.serviceCategory}
              />
            </Row>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button
            variant="info"
            onClick={() => {
              handleClose();
              updateItem();
            }}
          >
            Update
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default UpdateServiceModal;
