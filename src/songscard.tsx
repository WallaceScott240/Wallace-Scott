import React from "react";
import SpotifyCard from "./Components/SpotifyCard";
import { Col, Container, Row } from "react-bootstrap";
import SpotifyCard2 from "./Components/SpotifyCard2";
import SpotifyCard3 from "./Components/SpotifyCard3";

const RecentSongsSection = () => {
  const sectionStyle = {
    backgroundColor: "whitesmoke",
    borderRadius: "8px",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
    color: "black",
    padding: "60px 20px",
  };

  const headingStyle = {
    fontSize: "2.5rem", // Larger heading for better visibility
    fontWeight: "bold",
    marginBottom: "30px", // Adequate spacing below the heading
  };

  const descriptionStyle = {
    fontSize: "1.125rem",
    lineHeight: "1.6",
    marginBottom: "40px", // Increased margin for better readability
  };

  const cardSpacing = {
    marginBottom: "30px", // Consistent spacing between the cards
  };

  return (
    <div style={sectionStyle}>
      <Container>
        <Row className="justify-content-center align-items-center">
          <Col xs={12} md={8}>
            <h1 style={headingStyle}>In My Free Time...</h1>
            <p style={descriptionStyle}>
              In my free time, I immerse myself in the art of curating music
              playlists, a passion that allows me to craft sonic journeys. Three
              of my carefully curated playlists are showcased on this website,
              each a unique blend of melodies that resonate with my eclectic
              taste. I find joy in exploring diverse genres, creating harmonious
              experiences that elevate my love for music. Whether discovering
              new tracks or revisiting classics, my free time is a symphony of
              curated sounds.
            </p>
          </Col>
        </Row>

        <Row className="justify-content-center">
          <Col xs={12} md={4} style={cardSpacing}>
            <SpotifyCard />
          </Col>
          <Col xs={12} md={4} style={cardSpacing}>
            <SpotifyCard2 />
          </Col>
          <Col xs={12} md={4} style={cardSpacing}>
            <SpotifyCard3 />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default RecentSongsSection;
