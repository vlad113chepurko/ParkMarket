import React from "react";
// Styles
import "../styles/pages/Home.css";
import "../styles/components/AboutPark.css";

import { motion } from "motion/react";
import { useNavigate } from "react-router";

// Components
import ReactDOM from "react-dom";

export default function Home() {
  const navigate = useNavigate();
  return (
    <div className="main-wrapper">
      <div className="home">
        <motion.section
          initial={{ opacity: 0.1 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 1, ease: "easeInOut" }}
          className="video-container"
        >
          <div className="video-wrapper">
            <video className="video-home" autoPlay loop muted>
              <source src="/park-video.mp4" type="video/mp4" />
              Your browser don't support video'
            </video>
            <article className="home-article">
              <h1>Welcome to Our Park!</h1>
              <h2>Order a tent, a bike, an electric scooter and relax!</h2>
            </article>
          </div>
        </motion.section>
        <motion.section
          initial={{ x: -1000, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8, ease: "easeInOut" }}
          className="order-container"
        >
          <section className="order-container-side">
            <article className="align-left">
              <h2>Make your first order</h2>
              <h3>Go relax now!</h3>
              <p>
                We invite you to spend a wonderful time in our park with
                available functions such as - ordering a bike, electric scooter,
                gazebo by the lake.
              </p>
              <button
                onClick={() =>
                  navigate(
                    sessionStorage.getItem("token") ? "/order" : "/auth/login"
                  )
                }
                className="order-button "
              >
                I wanna take order!
              </button>
            </article>
          </section>
          <section className="order-container-side">
            <img src="/trees-1587301_1920.jpg" alt="tree" />
          </section>
        </motion.section>
        <motion.section
          initial={{ x: 1000, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8, ease: "easeInOut" }}
          className="about-container"
        >
          <section className="order-container-side-video">
            <video className="about-video" autoPlay loop muted>
              <source src="/autumn.mp4" type="video/mp4" />
              Your browser don't support video'
            </video>
          </section>
          <section className="order-container-side">
            <article className="align-left">
              <h2>Park Market</h2>
              <h3>Relax with style. Live in the rhythm of the city.</h3>
              <p>
                <strong>ParkZone</strong> — This is a modern recreation area in
                the city center, where you can escape from the routine and spend
                a day in nature with comfort. What do we have:
              </p>
              <ul>
                <li>Electric scooter and bicycle rental</li>
                <li>Spacious tents and shaded areas</li>
                <li>Coffee, snacks and a cozy atmosphere</li>
                <li>Chill zones with music and evening lamps</li>
                <li>Board games, activities, mini-quests</li>
              </ul>
              <p>
                Located next to Shevchenko Park - just 5 minutes walk from the
                center. Come with friends, family or alone with nature - we have
                time and place for everyone.
              </p>
              <p>
                <strong>ParkZone - move, relax, enjoy.</strong>
              </p>
              <button
                onClick={() => navigate("/about-us")}
                className="order-button "
              >
                Read more about us!
              </button>
            </article>
          </section>
        </motion.section>
      </div>
    </div>
  );
}
