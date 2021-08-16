import React from 'react'
import OwlCarousel from 'react-owl-carousel'
import 'owl.carousel/dist/assets/owl.carousel.min.css'
import 'owl.carousel/dist/assets/owl.theme.default.min.css'
import './Carousel.css'
import a from '../../Assets/a.jpg'
import b from '../../Assets/b.jpg'
import c from '../../Assets/c.jpg' 

const Carousel = () => {
  return(
    <OwlCarousel
    className="owl-theme"
    items="5"
    autoPlay
    nav
    dots
    loop
    margin={10}
    >
        <div className="item">
            <img className="carousel_image" src={a}/>
        </div>
        <div className="item">
            <img className="carousel_image" src={b}/>
        </div>
        <div className="item">
            <img className="carousel_image" src={c}/>
        </div>
    </OwlCarousel>
   )

 }

export default Carousel