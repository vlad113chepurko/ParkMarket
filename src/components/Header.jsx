import { Link } from "react-router-dom";
import "../styles/Header.css";
export default function Header() {
  return (
    <header className="header">
      <div className="logo-container">
        <Link to="/">
          <img className="logo" src="./ParkMarketLogo.svg" alt="logo" />
        </Link>
      </div>
      <div className="search-bar">
        <button className="search-button">
          <img
            src="https://img.icons8.com/?size=100&id=132&format=png&color=FFFFFF"
            alt="search"
          />
        </button>
        <input type="text" placeholder="Search..." />
      </div>
      <section className="icons-container">
        <i className="cart-icon">
          <Link to="/cart">
            <img
              className="icon"
              src="https://img.icons8.com/?size=100&id=ii6Lr4KivOiE&format=png&color=FFFFFF"
              alt="cart"
            />
          </Link>
        </i>
        <i className="profile-icon">
          <Link to="/login">
            <img
              className="icon"
              src="https://img.icons8.com/?size=100&id=98957&format=png&color=FFFFFF"
              alt="user"
            />
          </Link>
        </i>
      </section>
    </header>
  );
}
