import React from 'react';
import Img1 from "./../../image/1.1.jpg"
import Img2 from "./../../image/1.2.jpg"
import Img3 from "./../../image/1.3.jpg"
import Carousel from 'react-bootstrap/Carousel'

const Carouselbase = () => (
    <Carousel className="carousel">
        <Carousel.Item>
            <img
                className="d-block w-100"
                src={Img1} alt="dogo2"
            />
            {/* <Carousel.Caption> */}

            {/* <p>DOGO #1</p> */}
            {/* </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item>

            <img
                className="d-block w-100"
                src={Img2} alt="dogo2"
            />

            {/* <Carousel.Caption> */}

            {/* <p>DOGO #2</p> */}
            {/* </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item>
            <img
                className="d-block w-100"
                src={Img3}
                alt="dogo3"
            />

        </Carousel.Item>
    </Carousel>
);


export default Carouselbase