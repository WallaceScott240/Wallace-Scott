import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card, Col, Row } from "react-bootstrap";

interface IPhoto {
  id: number,
  url: string,
  src: ISrc
}

interface ISrc {
  medium: string
}

function ImageData() {
  const [images, setImages] = useState<IPhoto[]>([]);
  const apiKey = import.meta.env.VITE_APP_API_KEY;
  const apiUrl = import.meta.env.VITE_APP_BASE_URL;

  const fetchData = async () => {
    try {
      const response = await axios.get(apiUrl, {
        headers: {
          Authorization: apiKey,
        },
      });
      const imageData = response.data.photos;
      console.log(imageData);
      setImages(imageData);
    } catch (error) {
      console.error("Error fetching data from Pexels:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const DivStyle = {
    margin: 50,
    padding: 20,
    borderRadius: 7,
    backgroundColor: "#f2f2f2",
    maxWidth: "100%",
  };

  const ImageStyle = {};

  const staggeredGridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
    gridGap: "20px",
  };

  return (
    <div style={DivStyle}>
      <h1>Pexels Images</h1>
      <div style={staggeredGridStyle}>
        {images.map((image: IPhoto) => (
          <Card key={image.id}>
            <Card.Img
              variant="top"
              src={image.src.medium}
              alt={image.url}
              style={{
                borderRadius: "8px",
                objectFit: "cover",
              }}
            />
          </Card>
        ))}
      </div>
    </div>
  );
}

export default ImageData;
