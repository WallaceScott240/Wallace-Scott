import React from "react";
import SpotifyCard from "./Components/SpotifyCard";
import { Col, Container, Row } from "react-bootstrap";
import SpotifyCard2 from "./Components/SpotifyCard2";
import SpotifyCard3 from "./Components/SpotifyCard3";

const RecentSongsSection = () => {
  const aboutStyle = {
    backgroundColor: "whitesmoke",
    borderRadius: "0px",
    boxShadow: "0px 0px 1px -1px #EF2D56",
    color: "black",
    padding: "60px 20px",
  };

  const headingStyle = {
    marginBottom: "20px", // Adjust margin for the heading
  };

  return (
    <div style={aboutStyle}>
      <div style={{height: 50}}> </div>

      <Container>
        <Row className="justify-content-center align-items-center">
          <Col xs={12} md={8}>
            <h1 className="lg" style={headingStyle}>
              In My Free Time...
            </h1>
            <p className="lead">
              In my free time, I immerse myself in the art of curating music
              playlists, a passion that allows me to craft sonic journeys. Three
              of my carefully curated playlists are showcased on this website,
              each a unique blend of melodies that resonate with my eclectic
              taste. I find joy in exploring diverse genres, creating harmonious
              experiences that elevate my love for music. Whether discovering
              new tracks or revisiting classics, my free time is a symphony of
              curated sounds.
            </p>
            <Row className="SizedBox" style={{ height: 25 }}></Row>
          </Col>

          <Col>
            <Row>
              <SpotifyCard></SpotifyCard>
            </Row>
            <Row className="SizedBox" style={{ height: 25 }}></Row>
            <Row>
              <SpotifyCard2></SpotifyCard2>
            </Row>
            <Row className="SizedBox" style={{ height: 25 }}></Row>
            <Row>
              <SpotifyCard3></SpotifyCard3>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default RecentSongsSection;
