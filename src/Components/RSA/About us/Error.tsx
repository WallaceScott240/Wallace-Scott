import React from "react";
import FooterRSA from "../Foot";

const NotFoundPage: React.FC = () => {
  return (
    <>
      <div style={styles.container}>
        <h1 style={styles.heading}>🚧 We're Working on It! 🚧</h1>
        <p style={styles.message}>
          This page isn't ready yet, but we're on it. Check back soon!
        </p>
        <p style={styles.error}>Error 404 - Page Not Found</p>
      </div>
      <div><FooterRSA></FooterRSA></div>
    </>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column" as const,
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    textAlign: "center" as const,
    backgroundColor: "#f8f9fa",
    color: "#333",
  },
  heading: {
    fontSize: "2rem",
    marginBottom: "10px",
  },
  message: {
    fontSize: "1.2rem",
  },
  error: {
    marginTop: "20px",
    fontSize: "1rem",
    color: "#ff4c4c",
  },
};

export default NotFoundPage;
