import "../styles/Home.css";
import "../styles/AboutPark.css";
import park_photo from "../assets/park-photo.jpg";
import Filter from "../components/Filter";

export default function Home() {
  return (
    <div className="main-wrapper">
      <Filter />
      <div className="home">
        <div className="park-history">
          <h1>Welcome to Our Park!</h1>
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
            has developed and modernized, and today it is one of the city's most
            popular parks. In 2010, the park underwent a major renovation,
            introducing new recreational areas and landscaping. The park
            actively participates in environmental and cultural projects.
          </p>
          <p>
            In 2023, the park won an award as the best urban park for family
            recreation.
          </p>
        </section>

        {/* Gallery Section */}
        <section className="park-media">
          <h2>Gallery</h2>
          <img src={park_photo} alt="Park Photo" className="park-image" />
          {/* You can add more images here if needed */}
        </section>
      </div>
    </div>
  );
}
