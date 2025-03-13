import React from "react";
import styled from "styled-components";

// Sample logos (replace with actual image URLs)
const partnerLogos = [
  "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg", // Amazon
  "https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg", // Facebook
  "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg", // Netflix
  "https://upload.wikimedia.org/wikipedia/commons/b/bd/Tesla_Motors.svg", // Tesla
  "https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png", // Instagram
  "https://upload.wikimedia.org/wikipedia/commons/2/26/Spotify_logo_with_text.svg", // Spotify
  "https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg", // PayPal
  "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg", // Microsoft
];



const HeroSectionPartners = () => {
  return (
    <HeroContainer>
      <HeroContent>
        <Title>Our Trusted Partners</Title>
        <Description>
          We collaborate with the world’s leading companies to bring the best
          experiences to our customers.
        </Description>
      </HeroContent>
      <LogoGrid>
        {partnerLogos.map((logo, index) => (
          <LogoCard key={index}>
            <img src={logo} alt={`Partner ${index + 1}`} />
          </LogoCard>
        ))}
      </LogoGrid>
    </HeroContainer>
  );
};

// Styled Components
const HeroContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 100vh;
  background: #f9f9f9;
  padding: 40px;
`;

const HeroContent = styled.div`
  max-width: 800px;
  margin-bottom: 30px;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  color: #333;
`;

const Description = styled.p`
  font-size: 1.2rem;
  color: #555;
  margin-top: 10px;
`;

const LogoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 20px;
  max-width: 1200px;
  width: 100%;
  padding: 20px;
`;

const LogoCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  transition: transform 0.3s ease-in-out;

  img {
    max-width: 120px;
    height: auto;
  }

  &:hover {
    transform: scale(1.05);
  }
`;

export default HeroSectionPartners;
