import React from "react";

const MarqueeSection: React.FC = () => {
  return (
    <div style={styles.marqueeContainer}>
      <div style={styles.marquee}>
        <span style={styles.text}>
          RSA LABS • RAPTER • RESEARCH PUBLICATIONS • PATENTS
        </span>
        <br />
        <span style={styles.text}>
          RSA LABS • RAPTER • RESEARCH PUBLICATIONS • PATENTS
        </span>
        <br />
        <span style={styles.text}>
          RSA LABS • RAPTER • RESEARCH PUBLICATIONS • PATENTS
        </span>
        <br />
        <span style={styles.text}>
          RSA LABS • RAPTER • RESEARCH PUBLICATIONS • PATENTS
        </span>
      </div>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  marqueeContainer: {
    width: "100%",
    overflow: "hidden",
    whiteSpace: "nowrap",
    background: "whitesmoke",
    color: "#355E3B",
    padding: "20px 0",
    height: "200px",
    display: "flex",
    alignItems: "center",
    fontFamily: "Poppins, sans-serif", // Improved typography
  },
  marquee: {
    display: "inline-flex",
    animation: "marquee 150s linear infinite", // Slowed down animation
  },
  text: {
    fontSize: "4.5rem", // Slightly larger text for more impact
    fontWeight: 900, // Stronger bold effect
    paddingRight: "100px", // More spacing for clarity
    letterSpacing: "2px", // Improved readability
    textTransform: "uppercase" as "uppercase",
  },
};

const globalStyles = `
@keyframes marquee {
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(-100%);
  }
}
`;

const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = globalStyles;
document.head.appendChild(styleSheet);

export default MarqueeSection;
