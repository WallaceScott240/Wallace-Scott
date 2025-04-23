import React from "react";

const TryHackMeProfile = () => {
  return (
    <section style={styles.section}>
      <div style={styles.container}>
        <div style={styles.textSection}>
          <h2 style={styles.heading}>TryHackMe Progress</h2>
          <p style={styles.paragraph}>
            I’m actively learning through TryHackMe, exploring hands-on labs in cybersecurity. 
            My profile highlights progress in topics such as penetration testing, networking, 
            and ethical hacking. I’ve completed learning paths and earned badges along the way.
          </p>
        </div>
        <div style={styles.badgeCard}>
          <iframe
            src="https://tryhackme.com/api/v2/badges/public-profile?userPublicId=3833961"
            title="TryHackMe Badge"
            style={styles.iframe}
          ></iframe>
        </div>
      </div>
    </section>
  );
};

const styles = {
  section: {
    backgroundColor: "#f5f7fa",
    padding: "40px 20px",
  },
  container: {
    maxWidth: "1000px",
    margin: "0 auto",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "30px",
  },
  textSection: {
    flex: "1 1 400px",
  },
  heading: {
    fontSize: "2rem",
    marginBottom: "10px",
    color: "#1e2a38",
  },
  paragraph: {
    fontSize: "1rem",
    color: "#4a5568",
    lineHeight: "1.6",
  },
  badgeCard: {
    flex: "0 0 330px",
    height: "89px",
    backgroundColor: "#3E475A",
    borderRadius: "10px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
    overflow: "hidden",
  },
  iframe: {
    border: "none",
    width: "100%",
    height: "100%",
  },
};

export default TryHackMeProfile;
