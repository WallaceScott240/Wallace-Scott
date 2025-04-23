import React from "react";

const SpotifyEmbed = () => {
  const embedUrl =
    "https://open.spotify.com/embed/playlist/5tnteuYEegnCsetyRGZ6Gv?utm_source=generator&theme=0";

  return (
    <section style={styles.section}>
      <div style={styles.container}>
        <div style={styles.iframeWrapper}>
          <iframe
            title="Spotify Playlist Embed"
            aria-label="Spotify Playlist Player"
            src={embedUrl}
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            style={styles.iframe}
          ></iframe>
        </div>
      </div>
    </section>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  section: {
    padding: "20px",
    backgroundColor: "#f5f7fa",
  },

  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  iframeWrapper: {
    position: "relative",
    width: "100%",
    paddingBottom: "56.25%", // 16:9 aspect ratio (100% / 16 * 9 = 56.25%)
    height: 0,
    overflow: "hidden",
    borderRadius: "12px",
  },

  iframe: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    border: "none",
    borderRadius: "12px",
  },
};

export default SpotifyEmbed;
