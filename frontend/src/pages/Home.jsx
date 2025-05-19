import React from "react";
// Styles
import "../styles/pages/Home.css";
import "../styles/components/AboutPark.css";
import "../styles/components/Zoom.css";

import { motion } from "motion/react";
import { useNavigate } from "react-router"

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
              <button className="order-button ">I wanna take order!</button>
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
                <strong>ParkZone</strong> — это современная зона отдыха в центре
                города, где ты можешь вырваться из рутины и провести день на
                природе с комфортом. What do we have:
                <ul>
                  <li>Аренда электросамокатов и велосипедов</li>
                  <li>Просторные палатки и теневые зоны</li>
                  <li>Кофе, снеки и уютная атмосфера</li>
                  <li>Chill-зоны с музыкой и вечерними лампами</li>
                  <li>Настолки, активности, мини-квесты</li>
                  <p>
                    Located next to Shevchenko Park - just 5 minutes walk from
                    the center. Come with friends, family or alone with nature -
                    we have time and place for everyone.
                  </p>
                  <p>
                    <strong>ParkZone - move, relax, enjoy.</strong>
                  </p>
                </ul>
              </p>
              <button onClick={() => navigate('/about-us')} className="order-button ">Read more about us!</button>
            </article>
          </section>
        </motion.section>
      </div>
    </div>
  );
}
