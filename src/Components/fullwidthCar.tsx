import React from "react";
import { Container, Row, Col, Carousel, Button } from "react-bootstrap";
import Project1 from "./images/TheHandbook.png";
import cool from "./images/coolwalk.png";
import mushroon from "./images/musroom.jpg";

const FullWidthCarousel = () => {
  const carouselStyle = {
    boxShadow: "0px 0px 25px -5px rgba(0,0,0,0.3)", 
  };
  const SizedBox = {
    height: 30,
    borderRadius: 7,
  };

  const captionStyle = {
    bottom: "0",
    left: "0",
    width: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)", 
    padding: "20px", 
  };

  return (
    <div style={carouselStyle}>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Project1}
            height={600}
            alt="First slide"
          />
          <Carousel.Caption style={captionStyle}>
            <h2 className="display-5">App Development</h2>
            <p>A glimps of my apps</p>
            <div style={SizedBox}></div>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={mushroon}
            height={600}
            alt="Second slide"
          />
          <Carousel.Caption style={captionStyle}>
            <h2 className="display-5">Web Development</h2>
            <p>A glimps of the websites I've worked on</p>
            <div style={SizedBox}></div>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={cool}
            height={600}
            alt="Third slide"
          />
          <Carousel.Caption style={captionStyle}>
            <h2>Slide 3 Heading</h2>
            <p>Slide 3 Description</p>
            <div style={SizedBox}></div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default FullWidthCarousel;
