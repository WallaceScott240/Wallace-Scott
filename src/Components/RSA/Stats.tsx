import React from "react";
import CountUp from "react-countup";
import { motion } from "framer-motion";

const stats = [
  { label: "Published Papers", value: 1 },
  { label: "Successful Collaborations", value: 53 },
  { label: "Projects", value: 7 },
];

const StatisticsSection: React.FC = () => {
  return (
    <section style={styles.section}>
      <div style={styles.container}>
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            style={styles.statBox}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <h2 style={styles.value}>
              <CountUp end={stat.value} duration={2} />+
            </h2>
            <p style={styles.label}>{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const styles = {
  section: {
    backgroundColor: "white",
    padding: "60px 20px",
    textAlign: "center" as "center",
    color: "#fff",
  },
  container: {
    display: "flex",
    justifyContent: "center",
    gap: "60px",
    flexWrap: "wrap" as "wrap",
  },
  statBox: {
    textAlign: "center" as "center",
  },
  value: {
    fontSize: "2rem",
    fontWeight: "300", // Light font weight
    color: "#355E93",
  },

  label: {
    fontSize: "1rem",
    color: "#BBBBBB",
    marginTop: "5px",
  },
};

export default StatisticsSection;
