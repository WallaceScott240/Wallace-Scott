import React from "react";

const SpotifyEmbed = () => {
  const embedCode =
    "https://open.spotify.com/embed/track/6Z8R6UsFuGXGtiIxiD8ISb?utm_source=generator"; // Replace with your Spotify embed code

  return (
    <div style={{ maxWidth: "300px", margin: "auto", borderRadius: "12px" }}>
      <iframe
        title="Spotify Embed"
        src={embedCode}
        width="100%"
        height="152"
        frameBorder="0"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
        style={{ borderRadius: "12px" }}
      ></iframe>
    </div>
  );
};

export default SpotifyEmbed;
