import React from "react";
import Menu from "./Menu/Menu";
import { Link } from "react-router-dom";
import { useLoadUser } from "../hooks/useUserLoad";
import { useUserStore } from "../store/useUserStore";
import { useSelectedProductsStore } from "../store/useSelectedProductsStore";
import "../styles/components/Header.css";

export default function Header() {
  const { userName, userAvatar } = useUserStore();
  const { counter } = useSelectedProductsStore();

  const isLoading = useLoadUser();
  if (isLoading) {
    return (
      <div className="loading">
        <img
        className="spinner"
          src="https://img.icons8.com/?size=100&id=RnQwNiHnJRvf&format=gif&color=878568"
          alt="loading"
          width={50}
          height={50}
        />
      </div>
    );
  }

  return (
    <header className="header">
      <div className="logo-container">
        <Menu />
        <Link to="/">
          <img title="home" className="logo" src="/logo.svg" alt="logo" />
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
          <span className="count-circle">{counter}</span>
          <Link to="/cart">
            <img
              title="cart"
              className="icon"
              src="https://img.icons8.com/?size=100&id=ii6Lr4KivOiE&format=png&color=1A1A1A"
              alt="cart"
            />
          </Link>
        </i>
        {sessionStorage.getItem("token") ? (
          <div className="profile-container ">
            <Link to="/profile" className="profile-avatar-container">
              <img className="avatar" src={userAvatar} alt="avatar" />
            </Link>
            <p>{userName ? userName : "anonymus"}</p>
          </div>
        ) : (
          <i className="profile-icon">
            <Link
              to={
                sessionStorage.getItem("token") ? "/profile" : "/auth/register"
              }
            >
              <img
                title="user"
                className="icon"
                src="https://img.icons8.com/?size=100&id=98957&format=png&color=1A1A1A"
                alt="user"
              />
            </Link>
          </i>
        )}
      </section>
    </header>
  );
}
