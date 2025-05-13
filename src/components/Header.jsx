import { Link } from "react-router-dom";
import logo  from "../assets/logo.svg"
import "../styles/Header.css";
export default function Header() {
  return (
    <header className="header">
      <div className="logo-container">
        <Link to="/">
          <img
            title="home"
            className="logo"
            src={logo}
            alt="logo"
          />
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
              title="cart"
              className="icon"
              src="https://img.icons8.com/?size=100&id=ii6Lr4KivOiE&format=png&color=1A1A1A"
              alt="cart"
            />
          </Link>
        </i>
        <i className="profile-icon">
          <Link to={sessionStorage.getItem('token') ? '/profile' : '/auth/register'}>
            <img
              title="user"
              className="icon"
              src="https://img.icons8.com/?size=100&id=98957&format=png&color=1A1A1A"
              alt="user"
            />
          </Link>
        </i>
      </section>
    </header>
  );
}
