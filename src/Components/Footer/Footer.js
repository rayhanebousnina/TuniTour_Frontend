import React from 'react'
import { Container, Row, Col, InputGroup, FormControl, Button } from 'react-bootstrap'
import './Footer.css'
import logo from '../../Assets/TuniTour.png'


const Footer = () => {
  return(
    <Container className="footer_style pt-5">
        <Row className="pt-3">
            <Col className="d-flex justify-content-center mb-5" md={4} sm={12} xs={12}>
                <img className="logo" src={logo} />
            </Col>
            <Col className="d-flex justify-content-center mb-5" md={4} sm={12} xs={12}>
                <h4>Useful links</h4>
            </Col>
            <Col md={4} sm={12} xs={12}>
                <h4>Your travel journey starts here</h4>
                <p>Subscribe now for travel tips, personalized itineraries, and vacation inspiration straight to your inbox.</p>
                <InputGroup className="my-5">
                    <FormControl
                    className="subscribe_input"
                    placeholder="Your email"
                    aria-label="Your email"
                    aria-describedby="basic-addon2"
                    />
                    <Button className="subscribe_btn" id="button-addon2">
                    Subscribe
                    </Button>
                </InputGroup>
            </Col>
        </Row>
    </Container>
   )

 }

export default Footer