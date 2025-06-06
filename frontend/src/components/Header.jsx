import React from "react";
import Menu from "./Menu/Menu";
import { Link } from "react-router-dom";
import { useLoadUser } from "../hooks/useUserLoad";
import { useUserStore } from "../store/useUserStore";
import { useSelectedProductsStore } from "../store/useSelectedProductsStore";
import { useNavigate } from "react-router-dom";
import "../styles/components/Header.css";

export default function Header() {
  const { userName, userAvatar } = useUserStore();
  const { counter } = useSelectedProductsStore();
  const navigate = useNavigate();

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
          <i onClick={() => navigate("/cart")} to="/cart">
            <img
              title="cart"
              className="icon"
              src="https://img.icons8.com/?size=100&id=ii6Lr4KivOiE&format=png&color=1A1A1A"
              alt="cart"
            />
          </i>
        </i>
        {sessionStorage.getItem("token") ? (
          <div className="profile-container ">
            <i
              onClick={() => navigate("/profile")}
              className="profile-avatar-container"
            >
              <img
                className="avatar"
                src={userAvatar ? userAvatar : "/Anonymous_emblem.svg.png"}
                alt="avatar"
              />
            </i>
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
