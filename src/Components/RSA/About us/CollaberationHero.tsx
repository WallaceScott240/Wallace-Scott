import React from "react";
import { CSSProperties } from "react";

const CollaborationSectionHero = () => {
  return (
    <section style={styles.container}>
      <div style={styles.content}>
        <img src="/assets/Jain.png" alt="JAIN Logo" style={styles.logo} />
        <h2 style={styles.heading}>
          Collaboration with JAIN (Deemed-to-be University)
        </h2>
        <p style={styles.text}>
          The company originates from a collaborative thought at JAIN
          (Deemed-to-be University) to set up a national centre to foster
          innovation and entrepreneurship by improving the standard of research
          at the University level.
        </p>
        <p style={styles.text}>
          The idea grew into a global thought on establishing a centre for
          innovation and research based on creating impact – at the societal
          level, globally.
        </p>
      </div>
    </section>
  );
};

const styles: Record<string, CSSProperties> = {
  container: {
    width: "100%",
    minHeight: "100vh", // Full screen height
    backgroundColor: "#fff",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "4vw 6vw", // Responsive padding
    boxShadow:
      "0px -10px 20px rgba(0, 0, 0, 0.1), 0px 10px 20px rgba(0, 0, 0, 0.1)",
  },
  content: {
    maxWidth: "700px", // Center content with a readable width
  },
  logo: {
    width: "clamp(180px, 20%, 250px)", // Responsive logo size
    height: "auto",
    marginBottom: "20px",
  },
  heading: {
    fontSize: "clamp(28px, 4vw, 36px)", // Bigger font for full-page effect
    fontWeight: "bold",
    marginBottom: "20px",
    color: "#333",
  },
  text: {
    fontSize: "clamp(16px, 2vw, 18px)", // Adjust for readability
    lineHeight: "1.8",
    color: "#555",
  },
};

export default CollaborationSectionHero;
