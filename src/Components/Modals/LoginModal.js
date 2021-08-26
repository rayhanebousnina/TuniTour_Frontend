import React, {useState} from 'react'
import { Button, Modal, Form, Col, Row } from "react-bootstrap";



const LoginModal = () => {

    // Modal State
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


  return(
    <div>    
        <div  onClick={handleShow}>
              Log In
        </div>   
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>Log In</Modal.Title>                      
            </Modal.Header> 
            <Modal.Body>
                <Form>
                    <Row className="mb-3 mx-1">
                        <Form.Control placeholder="Email" />
                    </Row>
                    <Row className="mb-3 mx-1">
                        <Form.Control placeholder="Password" type="password"/>
                    </Row>
                </Form>
                <Button className="w-100" variant="info" onClick={handleClose}>
                    Log In
                </Button>
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                Cancel
            </Button>
            <Button variant="link" onClick={handleClose}>
                Forgot password ?
            </Button>
            </Modal.Footer>
        </Modal>
    </div>
   )

 }

export default LoginModal