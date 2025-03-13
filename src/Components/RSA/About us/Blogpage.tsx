import React from "react";
import { CSSProperties } from "react";
import FooterRSA from "../Foot";

const BlogPage = () => {
  return (
    <>
      <div style={{ height: "100px" }}></div>

      <div style={styles.page}>
        {/* Newspaper Header */}
        <header style={styles.header}>
          <h1 style={styles.title}>The Daily Tech</h1>
          <p style={styles.subtitle}>
            Your source for the latest in technology & innovation
          </p>
        </header>

        {/* Blog Section */}
        <section style={styles.blogContainer}>
          {articles.map((article, index) => (
            <article key={index} style={styles.article}>
              <div style={styles.articleContent}>
                <h2 style={styles.articleTitle}>{article.title}</h2>
                <p style={styles.articleText}>{article.text}</p>
                <p style={styles.articleText}>{article.text}</p>{" "}
                {/* Extra text for newspaper style */}
              </div>
              <img
                src={article.image}
                alt={article.title}
                style={styles.articleImage}
              />
            </article>
          ))}
        </section>
      </div>
      <div>
        <FooterRSA></FooterRSA>
      </div>
    </>
  );
};

// Sample Newspaper Articles with Wikipedia Images
const articles = [
  {
    title: "The Future of Artificial Intelligence",
    text: "Artificial Intelligence (AI) continues to advance at an unprecedented rate. Experts predict that within the next decade, AI will transform industries ranging from healthcare to finance. Ethical concerns remain, but the benefits of AI-driven automation are undeniable.",
    image:
      "https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    title: "Cybersecurity Threats in 2025",
    text: "With increasing reliance on digital systems, cybersecurity threats are evolving. Phishing, ransomware, and state-sponsored attacks are on the rise. Companies must adopt proactive security measures to mitigate risks.",
    image:
      "https://images.pexels.com/photos/919734/pexels-photo-919734.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    title: "How Quantum Computing is Changing Science",
    text: "Quantum computing is set to revolutionize scientific research. By harnessing quantum bits (qubits), researchers can solve problems that were once considered impossible. This breakthrough could lead to major advancements in medicine and cryptography.",
    image:
      "https://images.pexels.com/photos/256381/pexels-photo-256381.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    title: "The Rise of Space Tourism",
    text: "Commercial space travel is no longer science fiction. Companies like SpaceX and Blue Origin are making space tourism a reality. The industry is expected to grow rapidly, bringing new opportunities for exploration beyond Earth.",
    image:
      "https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
];

const styles: Record<string, CSSProperties> = {
  page: {
    width: "100%",
    backgroundColor: "#f8f8f8",
    fontFamily: "'Times New Roman', serif",
    paddingBottom: "50px",
  },
  header: {
    textAlign: "center",
    padding: "40px 20px",
    backgroundColor: "#fff",
    borderBottom: "2px solid #ddd",
  },
  title: {
    fontSize: "40px",
    fontWeight: "bold",
    marginBottom: "5px",
  },
  subtitle: {
    fontSize: "18px",
    color: "#666",
  },
  blogContainer: {
    maxWidth: "1000px",
    margin: "30px auto",
    padding: "0 20px",
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "30px",
  },
  article: {
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "5px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  articleContent: {
    flex: 1,
  },
  articleTitle: {
    fontSize: "22px",
    fontWeight: "bold",
    marginBottom: "10px",
  },
  articleText: {
    fontSize: "16px",
    lineHeight: "1.6",
    color: "#333",
    marginBottom: "10px",
  },
  articleImage: {
    width: "100%",
    height: "180px",
    objectFit: "cover",
    borderRadius: "5px",
  },
};

export default BlogPage;
