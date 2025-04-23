import React from "react";

const SpotifyEmbed3 = () => {
  const embedUrl =
    "https://open.spotify.com/embed/playlist/5tnteuYEegnCsetyRGZ6Gv?utm_source=generator&theme=0";

  return (
    <section style={styles.section}>
      <div style={styles.container}>
        <iframe
          title="Spotify Playlist Embed"
          aria-label="Spotify Playlist Player"
          src={embedUrl}
          width="100%"
          height="152"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
          style={styles.iframe}
        ></iframe>
      </div>
    </section>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  section: {
    padding: "20px",
    backgroundColor: "#f5f7fa",
  },

  iframe: {
    border: "none",
    borderRadius: "12px",
    width: "100%",
    height: "100%",
  },
};

export default SpotifyEmbed3;
