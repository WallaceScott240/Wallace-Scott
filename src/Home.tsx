import { Col, Container, Row, Carousel, Button } from "react-bootstrap";
import mountains from "./Components/images/Mountains.jpg";

import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { useSpring, animated as anim } from "react-spring";
import "./Toys/style.css";
import FullWidthCarousel from "./Components/fullwidthCar";
import About from "./About";
import CollaborationSection from "./Components/colaberation";
import HeroSection from "./Components/heroSection";
import WorkExperience from "./Components/workExp";

const fast = { tension: 1200, friction: 40 };
const slow = { mass: 10, tension: 200, friction: 50 };
const trans = (x: any, y: any) =>
  `translate3d(${x}px,${y}px,0) translate3d(-50%,-50%,0)`;

function Home() {
  const [{ pos1 }, set] = useSpring(() => ({ pos1: [0, 0], config: fast }));
  const [{ pos2 }] = useSpring(() => ({ pos2: pos1, config: slow }));
  const [{ pos3 }] = useSpring(() => ({ pos3: pos2, config: slow }));

  useEffect(() => {
    const handler = ({
      clientX,
      clientY,
    }: {
      clientX: number;
      clientY: number;
    }) => set({ pos1: [clientX, clientY] });
    window.addEventListener("mousemove", handler);
    return () => window.removeEventListener("mousemove", handler);
  }, [set]);

  const SizedBox = {
    height: 25,
    borderRadius: 7,
  };
  const SizedBox2 = {
    height: 50,
    backgroundColor: "white",
    borderRadius: 7,
  };

  const containerStyle = {
    backgroundImage: `url(${mountains})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    color: "#fff",
    padding: "50px",
  };

  const contentStyle = {
    backgroundColor: "rgba(0, 0, 0, 0.0)",
    borderRadius: "10px",
    padding: "100px",
    boxShadow: "0px 0px 25px -5px rgba(255,255,255,0.20)",
  };

  const CarouselStyle = {
    backgroundColor: "#F8F9FA",
    borderRadius: "10px",
    padding: "50px",
    margin: "20px 20px",
    // boxShadow: "0px 0px 25px -5px rgba(255,255,255,0.20)",
    color: "black",
  };

  const services = [
    {
      title: "Service 1",
      description: "Description of Service 1.",
    },
    {
      title: "Service 2",
      description: "Description of Service 2.",
    },
    {
      title: "Service 3",
      description: "Description of Service 3.",
    },
  ];
  const resumeSectionStyle = {
    backgroundColor: "white",
    marginTop: "40px",
    marginBottom: "40px",
  };

  const ToySectionStyle = {
    marginTop: "80px",
    marginBottom: "80px",
  };

  const resumeUrl =
    "https://img1.wsimg.com/blobby/go/c2d42004-8296-4a70-9aaa-ea7e3f01228f/Cv.pdf";

  const downloadResume = () => {
    // You can implement the logic to trigger the download here
    // For simplicity, let's open the PDF in a new tab for now
    window.open(resumeUrl, "_blank");
  };

  return (
    <div style={{ backgroundColor: "#fff" }}>
      <div style={SizedBox2}></div>

      <WorkExperience></WorkExperience>
      <div style={SizedBox2}></div>

      <div style={SizedBox}></div>

      <div style={CarouselStyle}>
        <Container>
          <Row className="justify-content-center">
            <Col xs={12} md={8}>
              <h2 className="text-center"></h2>
              <Carousel
                style={{
                  margin: "20px",
                  color: "black",
                  height: "300px", // Adjust the height as needed
                }}
              >
                {services.map((service, index) => (
                  <Carousel.Item key={index} className="text-center display-8">
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                  </Carousel.Item>
                ))}
              </Carousel>
            </Col>
          </Row>
        </Container>
      </div>

      <div style={SizedBox}></div>

      {/* <div style={ToySectionStyle}>
        <Container>
          <Row className="justify-content-center align-items-center" style={{backgroundColor: ""}}>
            <Col xs={12} md={12} className="text-center">
              <h2 className="display-4" style={{ color: "black" }}>
              </h2>
              <br />
              <p className="lead" style={{ color: "black" }}>
              </p>
            </Col>
          </Row>
        </Container>
      </div>
      <div style={{backgroundColor:"white"}}>
        <>
          <svg style={{ position: "absolute", width: 0, height: 0 }}>
            <filter id="goo">
              <feGaussianBlur
                in="SourceGraphic"
                result="blur"
                stdDeviation="30"
              />
              <feColorMatrix
                in="blur"
                values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 30 -7"
              />
            </filter>
          </svg>
          <div className="hooks-main">
            <div className="hooks-filter">
              <anim.div
                className="b1"
                style={{ transform: pos3.interpolate(trans) }}
              />
              <anim.div
                className="b2"
                style={{ transform: pos2.interpolate(trans) }}
              />
              <anim.div
                className="b3"
                style={{ transform: pos1.interpolate(trans) }}
              />
            </div>
          </div>
        </>
      </div> */}
      <div style={resumeSectionStyle}>
        <div style={SizedBox2}></div>
        <Container>
          <Row className="justify-content-center align-items-center">
            <Col xs={12} md={12} className="text-center">
              <h2 className="" style={{ color: "black" }}>
                My Resume
              </h2>
              <br />
              <p className="lead" style={{ color: "black" }}>
                Explore my qualifications and experience by downloading my
                resume.
              </p>
              <br />
              <Button variant="outline-dark" onClick={downloadResume}>
                Download Resume
              </Button>
            </Col>
          </Row>
        </Container>
        <div style={SizedBox2}></div>
      </div>
      <div style={SizedBox}></div>
    </div>
  );
}
ReactDOM.render(<Home />, document.getElementById("root"));

export default Home;
