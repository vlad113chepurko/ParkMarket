import React from "react";
// Styles
import "../styles/pages/Home.css";
import "../styles/components/AboutPark.css";
import "../styles/components/Zoom.css";

// Components
import ReactDOM from "react-dom";

export default function Home() {
  return (
    <div className="main-wrapper">
      <div className="home">
        <section className="video-container">
          <div className="video-wrapper">
            <video className="video" autoPlay loop muted>
              <source src="/park-video.mp4" type="video/mp4" />
              Your browser don't support video'
            </video>
            <article className="home-article">
              <h1>Welcome to Our Park!</h1>
              <h2>Order a tent, a bike, an electric scooter and relax!</h2>
            </article>
          </div>
        </section>
        <section className="order-container">
          <section className="order-container-side">
            <article className="align-left">
              <h2>Make your first order</h2>
              <h3>Go relax now!</h3>
              <p>
                We invite you to spend a wonderful time in our park with
                available functions such as - ordering a bike, electric scooter,
                gazebo by the lake.
              </p>
              <button className="order-button ">I wanna take order!</button>
            </article>
          </section>
          <section className="order-container-side">
            <img src="/trees-1587301_1920.jpg" alt="tree" />
          </section>
        </section>
      </div>
    </div>
  );
}
