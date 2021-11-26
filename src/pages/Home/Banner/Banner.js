import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../images/banner1.jpg'
import banner2 from '../../../images/shutterstock_376470163-1.jpg'
import banner3 from '../../../images/shutterstock_382554793.jpg'
import './Banner.css'

const Banner = () => {
    return (
        <div className="banner-div">
            <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={banner1}
      alt="First slide"
    />
   
   <Carousel.Caption className="mb-5 b1">
      <h1 class="text-dark" ><i>The Worlds Smallest Quadcopter</i></h1>
      <h1 class="text-dark">WELCOME TO <span class="text-warning">Drone-Shop</span> </h1>
      <h5 class="text-dark">Parlo provide how all this mistaken idea of denouncing pleasure and sing pain was born an will give you a complete.</h5>
    </Carousel.Caption>
   
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={banner2}
      alt="Second slide"
    />

<Carousel.Caption className="mb-5 b1">
      <h1 class="text-dark" ><i>The Worlds Smallest Quadcopter</i></h1>
      <h1 class="text-dark">WELCOME TO <span class="text-warning">Drone-Shop</span> </h1>
      <h5 class="text-dark">Parlo provide how all this mistaken idea of denouncing pleasure and sing pain was born an will give you a complete.</h5>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={banner3}
      alt="Third slide"
    />

<Carousel.Caption className="mb-5 b1">
      <h1 class="text-dark" ><i>The Worlds Smallest Quadcopter</i></h1>
      <h1 class="text-dark">WELCOME TO <span class="text-warning">Drone-Shop</span> </h1>
      <h5 class="text-dark">Parlo provide how all this mistaken idea of denouncing pleasure and sing pain was born an will give you a complete.</h5>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </div>
    );
};

export default Banner;