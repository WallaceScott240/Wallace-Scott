import React, { useState, useEffect } from "react";

interface ImageCardProps {
  photo: any;
  onClick: any;
}

const ImageCard = ({ photo, onClick }: ImageCardProps) => (
  <div
    style={{
      borderRadius: "8px",
      overflow: "hidden",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      cursor: "pointer",
    }}
    onClick={() => onClick(photo)}
  >
    <img
      src={photo.src.medium}
      alt={photo.photographer}
      style={{
        width: "100%",
        height: "100%",
        objectFit: "cover",
        borderRadius: "8px",
      }}
      loading="lazy"
    />
  </div>
);

interface ImageModalProps {
  photo: any;
  onClose: React.MouseEventHandler;
}

const ImageModal = ({ photo, onClose }: ImageModalProps) => (
  <div
    style={{
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: "rgba(0, 0, 0, 0.5)",
      zIndex: 1000,
    }}
  >
    <div
      style={{
        backgroundColor: "#fff",
        borderRadius: "8px",
        padding: "20px",
        maxWidth: "80%",
        overflow: "auto",
      }}
    >
      <img
        src={photo.src.medium}
        alt={photo.photographer}
        style={{ width: "100%", borderRadius: "8px" }}
      />
      <button
        style={{
          marginTop: "10px",
          padding: "10px",
          background: "#3498db",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
        onClick={onClose}
      >
        Close
      </button>
    </div>
  </div>
);

const PexelsGallery = () => {
  const [prevDisabled, setPrevDisabled] = useState(true);
  const [nextDisabled, setNextDisabled] = useState(false);
  const [photos, setPhotos] = useState<any>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const apiKey = import.meta.env.VITE_APP_API_KEY;
  const perPage = 1;

  const handlePrevClick = () => {
    if (currentPage > 1) {
      loadPage(currentPage - 1);
    }
  };

  const handleNextClick = () => {
    if (currentPage < totalPages) {
      loadPage(currentPage + 1);
    }
  };
  const fetchPhotos = async (page: number) => {
    const apiUrl = `${
      import.meta.env.VITE_APP_BASE_URL
    }?per_page=${perPage}&page=${page}`;
    const headers = {
      Authorization: apiKey,
    };

    try {
      const response = await fetch(apiUrl, { headers });
      const data = await response.json();
      return data.photos;
    } catch (error) {
      console.error("Error fetching photos:", error);
      return [];
    }
  };

  const loadPage = async (page: number) => {
    setCurrentPage(page);

    const photosData = await fetchPhotos(page);
    setPhotos(photosData);
  };

  const openModal = (photo: React.SetStateAction<null>) => {
    setSelectedPhoto(photo);
  };

  const closeModal = () => {
    setSelectedPhoto(null);
  };

  useEffect(() => {
    setPrevDisabled(currentPage === 1);
    setNextDisabled(currentPage === totalPages);
  }, [currentPage, totalPages]);

  useEffect(() => {
    const fetchData = async () => {
      const initialPhotos = await fetchPhotos(currentPage);
      const totalPhotos = await fetchPhotos(1);
      const totalPagesCount = Math.ceil(totalPhotos.length / perPage);

      setPhotos(initialPhotos);
      setTotalPages(totalPagesCount);
    };

    fetchData();
  }, [currentPage]);

  const calculatePageRange = () => {
    const totalDisplayPages = 5; 
    const startPage = Math.max(
      1,
      currentPage - Math.floor(totalDisplayPages / 2)
    );
    const endPage = Math.min(totalPages, startPage + totalDisplayPages - 1);
    return { startPage, endPage };
  };

  return (
    <div
      style={{
        margin: 50,
        padding: 20,
        borderRadius: 7,
        backgroundColor: "#f2f2f2",
        maxWidth: "100%",
      }}
    >
      <h1
        className="display-4"
        style={{ marginBottom: "20px", color: "black" }}
      >
        Pexels Gallery
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
          gap: "20px",
        }}
      >
        {photos.map((photo: { id: React.Key }) => (
          <ImageCard key={photo.id} photo={photo} onClick={openModal} />
        ))}
      </div>

      {selectedPhoto && (
        <ImageModal photo={selectedPhoto} onClose={closeModal} />
      )}

      <div
        style={{
          marginTop: "20px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div>
          <button onClick={handlePrevClick} disabled={prevDisabled}>
            prev
          </button>
        </div>
        {Array.from({ length: totalPages }).map((_, index) => {
          const pageNumber = index + 1;
          const { startPage, endPage } = calculatePageRange();
          if (pageNumber >= startPage && pageNumber <= endPage) {
            return (
              <div
                key={pageNumber}
                style={{
                  backgroundColor:
                    currentPage === pageNumber ? "blue" : "white",
                  cursor: "pointer",
                  padding: "20px",
                  margin: "5px",
                  borderRadius: "5px",
                  transition: "black 0.3s",
                  color: currentPage === pageNumber ? "white" : "black",
                }}
                onClick={() => loadPage(pageNumber)}
              >
                {pageNumber}
              </div>
            );
          }
          return null;
        })}
        <div>
          <button onClick={handleNextClick} disabled={nextDisabled}>
            next
          </button>
        </div>
      </div>
    </div>
  );
};

export default PexelsGallery;
