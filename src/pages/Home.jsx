// Styles
import "../styles/Home.css";
import "../styles/AboutPark.css";
import "../styles/Zoom.css";

// Components
import ReactDOM from "react-dom";
import Filter from "../components/Filter";

// React
import { ModalContext } from "../context/ModalContext";
import { useParkPhotoStore } from "../store/useParkPhotosStore";
import { useState, useContext } from "react";

export default function Home() {

  // Photo params
  const photos = useParkPhotoStore((state) => state.photos);
  const [targetPhoto, setTargetPhoto] = useState("");
  const [isZoom, setIsZoom] = useState(false);
  const [titlePohoto, setPhotoTitle] = useState("");
  const [descriptionPhoto, setDescriptionPhoto] = useState("");

  const handleZoomPhoto = (photo) => {
    setTargetPhoto(photo.src);
    setPhotoTitle(photo.title);
    setDescriptionPhoto(photo.description);
    setIsZoom(true);
  };
  
  return (
    <ModalContext.Provider
      value={{ isZoom, setIsZoom, targetPhoto, titlePohoto, descriptionPhoto }}
    >
      <div className="main-wrapper">
        {isZoom ? <Zoom /> : null}
        <Filter />
        <div className="home">
          <h1>Welcome to Our Park!</h1>
          <div className="park-history">
            <h2>About Park</h2>
            <p>
              Our park was founded in 1995 with the goal of creating a unique
              space for relaxation and active recreation. Here, you can enjoy
              nature, walk along the well-maintained paths, and participate in
              various family-friendly events and activities.
            </p>
            <p>
              Over the years, the park has grown and now offers visitors a wide
              range of services: from walking zones to sports courts and
              educational programs.
            </p>
          </div>

          {/* Park History Section */}
          <section className="park-history">
            <h2>History of the Park</h2>
            <p>
              Our park opened in 1995 as a place for leisure. Over the years, it
              has developed and modernized, and today it is one of the city's
              most popular parks. In 2010, the park underwent a major
              renovation, introducing new recreational areas and landscaping.
              The park actively participates in environmental and cultural
              projects.
            </p>
            <p>
              In 2023, the park won an award as the best urban park for family
              recreation.
            </p>
          </section>

          {/* Gallery Section */}
          <section className="park-media">
            <h2>Gallery</h2>
            <section className="park-media-photos">
              {photos.map((photo, index) => {
                return (
                  <i key={index}>
                    <img
                      onClick={() => handleZoomPhoto(photo)}
                      className="park-photo"
                      title={photo.description}
                      src={photo.src}
                      alt={photo.title}
                    />
                  </i>
                );
              })}
            </section>
          </section>
        </div>
      </div>
    </ModalContext.Provider>
  );
}

function Zoom() {
  const { isZoom, setIsZoom, targetPhoto, titlePohoto, descriptionPhoto } =
    useContext(ModalContext);
  if (!isZoom) return null;

  return ReactDOM.createPortal(
    <div className="zoom-overlay">
      <div className="zoom">
        <h2>{titlePohoto}</h2>
        <p>{descriptionPhoto}</p>
        <i className="zoom-image-container ">
          <img className="zoom-image" src={targetPhoto} alt="image" />
        </i>
        <img
          onClick={() => setIsZoom(false)}
          className="close-button"
          src="https://img.icons8.com/?size=100&id=71200&format=png&color=ec9a9a"
          alt="close"
        />
      </div>
    </div>,
    document.body
  );
}
