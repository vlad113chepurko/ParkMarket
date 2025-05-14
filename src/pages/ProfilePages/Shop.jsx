import "../../styles/pages/ProfilePages.css";
import Video from "../../assets/video.mp4";

export default function Shop() {
  return (
    <div className="profile-shop-container">
      <div className="profile-pages-section-wrapper">
        <section className="profile-pages-section">
        </section>
        <section className="profile-pages-section-video">
          <video className="video" autoPlay loop>
            <source src={Video} type="video/mp4" />
            Your browser don't support video'
          </video>
        </section>
      </div>
    </div>
  );
}
