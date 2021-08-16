import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import NavigationBar2 from '../../Components/Navbars/Navbar2'
import './City.css'

const City = () => {
  return(
    <div>
        {/* Landing city section */}
      <div className="landing_city_page">
        {/* Navigation bar */}
          <NavigationBar2/>        
          <Container className="">
            <Row>
                <Col className="mt-5" md={{ span: 8, offset: 4 }}>
                    <h2>Kairaouen City</h2>
                </Col>
            </Row>
          </Container>       
      </div>
    </div>
   )

 }

export default City