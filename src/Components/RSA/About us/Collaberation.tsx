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
          The company originates from a collaborative thought at JAIN (Deemed-to-be University) to set up a national centre to foster innovation and entrepreneurship by improving the standard of research at the University level.
        </p>
        <p style={styles.text}>
          The idea grew into a global thought on establishing a centre for innovation and research based on creating impact – at the societal level, globally.
        </p>
      </div>
    </section>
  );
};

const styles: Record<string, CSSProperties> = {
  container: {
    width: "100%",
    height: "60vh",
    backgroundColor: "#fff",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "40px 20px",
    boxShadow: "0px -10px 20px rgba(0, 0, 0, 0.1), 0px 10px 20px rgba(0, 0, 0, 0.1)",
  },
  content: {
    maxWidth: "900px",
    padding: "20px",
  },
  logo: {
    width: "250px",
    height: "auto",
    marginBottom: "15px",
  },
  heading: {
    fontSize: "30px",
    fontWeight: "bold",
    marginBottom: "15px",
    color: "#333",
  },
  text: {
    fontSize: "16px",
    lineHeight: "1.5",
    color: "#555",
  },
};

export default CollaborationSection;