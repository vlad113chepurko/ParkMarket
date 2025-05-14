import React from "react";
import "../styles/components/Footer.css";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <section className="footer-content-container">
          <h3>Navigation</h3>
          <Link to="/aboutus">About us</Link>
          <Link
            to={sessionStorage.getItem("token") ? "/profile" : "/auth/login"}
          >
            Profile
          </Link>
          <Link to="/auth/register">Register</Link>
          <Link to="/cart">Cart</Link>
        </section>
        <section className="footer-content-container">
          <h3>We in Social Media</h3>
          <i className="social-media-container">
            <img
              src="https://img.icons8.com/?size=100&id=32292&format=png&color=6a6352"
              alt="instagram"
              title="instagram"
            />
            <img
              src="https://img.icons8.com/?size=100&id=12463&format=png&color=6a6352"
              alt="redit"
              title="redit"
            />
            <img
              src="https://img.icons8.com/?size=100&id=6Fsj3rv2DCmG&format=png&color=6a6352"
              alt="twitter"
              title="twitter"
            />
            <img
              src="https://img.icons8.com/?size=100&id=9R1sV3QvY18K&format=png&color=6a6352"
              alt="telegram"
              title="telegram"
            />
            <img
              src="https://img.icons8.com/?size=100&id=84521&format=png&color=6a6352"
              alt="tik-tok"
              title="tik-tok"
            />
            <img
              src="https://img.icons8.com/?size=100&id=44468&format=png&color=6a6352"
              alt="viber"
              title="viber"
            />
            <img
              src="https://img.icons8.com/?size=100&id=118468&format=png&color=6a6352"
              alt="facebook"
              title="facebook"
            />
            <img
              src="https://img.icons8.com/?size=100&id=37325&format=png&color=6a6352"
              alt="youtube"
              title="youtube"
            />
          </i>
        </section>
        <section className="footer-content-container">
          <h3>Contacts</h3>
          <p>+380 99 999 9999</p>
          <p>+380 88 888 8888</p>
          <p>+380 77 777 7777</p>
        </section>
        <section></section>
      </div>
      <p className="copy">&copy; 2025 ParkMarket. All rights reserved.</p>
    </footer>
  );
}
