import React from "react";

const NewSection: React.FC = () => {
  const sectionStyle: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    padding: "5vw",
    gap: "4vw",
    flexWrap: "wrap",
  };

  const imageContainer: React.CSSProperties = {
    width: "35%",
    minWidth: "300px",
    flexShrink: 0,
  };

  const imageStyle: React.CSSProperties = {
    width: "100%",
    borderRadius: "10px",
    boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.1)",
  };

  const textContainer: React.CSSProperties = {
    flex: 1,
    textAlign: "left",
  };

  const headingStyle: React.CSSProperties = {
    fontFamily: "Playfair Display, serif",
    fontSize: "clamp(24px, 4vw, 40px)",
    fontWeight: "bold",
    marginBottom: "10px",
  };

  const paragraphStyle: React.CSSProperties = {
    fontSize: "clamp(14px, 1.5vw, 18px)",
    lineHeight: "1.8",
  };

  // Media query for hiding the image on small screens
  const responsiveStyles = `
    @media (max-width: 768px) {
      .hide-on-mobile {
        display: none !important;
      }
    }
  `;

  return (
    <>
      {/* Injecting CSS directly into the component */}
      <style>{responsiveStyles}</style>

      <div style={sectionStyle}>
        {/* Image Section (Hidden on Small Screens) */}
        <div style={imageContainer} className="hide-on-mobile">
          <img src="/assets/Phone.png" alt="Mockup" style={imageStyle} />
        </div>

        {/* Text Content */}
        <div style={textContainer}>
          <h2 style={headingStyle}>Playfair</h2>
          <p style={paragraphStyle}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa
            mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla,
            mattis ligula consectetur, ultricies mauris. Maecenas vitae mattis
            tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non
            suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at
            maximus ante fermentum sit amet. Pellentesque commodo lacus at sodales
            sodales. Quisque sagittis orci ut diam condimentum, vel euismod erat
            placerat.
          </p>
          <p style={paragraphStyle}>
            In iaculis arcu eros, eget tempus orci facilisis id. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in
            hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula
            consectetur, ultricies mauris. Maecenas vitae mattis tellus. Nullam
            quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna
            interdum eu. Curabitur pellentesque nibh nibh, at maximus ante
            fermentum sit amet. Pellentesque commodo lacus at sodales sodales.
            Quisque sagittis orci ut diam condimentum, vel euismod erat placerat.
          </p>
          <p style={paragraphStyle}>
            Vestibulum auctor ornare leo, non suscipit magna interdum eu.
            Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet.
            Pellentesque commodo lacus at sodales sodales. Quisque sagittis orci
            ut diam condimentum, vel euismod erat placerat. In iaculis arcu eros,
            eget tempus orci facilisis id.
          </p>
        </div>
      </div>
    </>
  );
};

export default NewSection;
