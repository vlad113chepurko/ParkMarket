import "../../styles/pages/ProfilePages.css";
import Video from "../../assets/video.mp4";

export default function Shop() {
  return (
    <div className="profile-shop-container">
      <div className="profile-pages-section-wrapper">
        <section className="profile-shop-section">
          <h1>Selling your products</h1>
          <section className="profile-shop-text-content">
            <img
              src="https://img.icons8.com/?size=100&id=7979&format=png&color=b4b39c"
              alt="order"
              width={30}
              height={30}
            />
            <article>
              <h3>Start Renting Out Your Gear</h3>
              <p>
                Rent out gazebos, scooters, bikes, and more — to anyone, not
                just registered users.
              </p>
            </article>
          </section>
          <section className="profile-shop-text-content">
            <img
              src="https://img.icons8.com/?size=100&id=2969&format=png&color=b4b39c"
              alt="settings"
              width={30}
              height={30}
            />
            <article>
              <h3>Set Up Your Rentals in Minutes</h3>
              <p>
                List your items quickly and for free. When someone rents, just
                pay a flat 5% fee plus any applicable taxes.
              </p>
            </article>
          </section>
          <section className="profile-shop-text-content">
            <img
              src="https://img.icons8.com/?size=100&id=82641&format=png&color=b4b39c"
              alt=""
              width={30}
              height={30}
            />
            <article>
              <h3>Easy Booking and Enjoyment</h3>
              <p>
                Customers can book, pay, and enjoy their rental from any device
                — seamless and hassle-free.
              </p>
            </article>
          </section>
        </section>
        <section className="profile-shop-video ">
          <video className="video" autoPlay loop>
            <source src={Video} type="video/mp4" />
            Your browser don't support video'
          </video>
        </section>
      </div>
    </div>
  );
}
