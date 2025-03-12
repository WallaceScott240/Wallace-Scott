import React from "react";
import { CSSProperties } from "react";

const CollaborationSection = () => {
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
    minHeight: "60vh",
    backgroundColor: "#fff",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "5vw 4vw", // Responsive padding
    boxShadow:
      "0px -10px 20px rgba(0, 0, 0, 0.1), 0px 10px 20px rgba(0, 0, 0, 0.1)",
  },
  content: {
    maxWidth: "90%", // Increased width for responsiveness
    width: "900px",
    textAlign: "center", // Center text for better layout
  },
  logo: {
    width: "clamp(180px, 25%, 250px)", // Auto scales between 180px to 250px
    height: "auto",
    marginBottom: "15px",
  },
  heading: {
    fontSize: "clamp(24px, 2.5vw, 30px)", // Scales between 24px to 30px
    fontWeight: "bold",
    marginBottom: "15px",
    color: "#333",
  },
  text: {
    fontSize: "clamp(14px, 1.5vw, 16px)", // Auto-adjusting font size
    lineHeight: "1.6",
    color: "#555",
  },
};

export default CollaborationSection;
