import React from "react";
import { useNavigate } from "react-router";
import Filter from "../Filter";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ModalContext } from "../../context/ModalContext";
import { useUserStore } from "../../store/useUserStore";
import ReactDOM from "react-dom";
import "../../styles/components/Menu.css";

export default function MenuContainer() {
  const { isMenu, setIsMenu } = useContext(ModalContext);
  const navigate = useNavigate();
  const { userName, userAvatar } = useUserStore();

  const handleLogOut = () => {
    sessionStorage.removeItem("token");
    navigate("/");
    window.location.reload();
  };

  if (!isMenu) return null;

  return ReactDOM.createPortal(
    <div className="menu-overlay">
      <div className="menu-content">
        <section className="menu-section">
          <img
            onClick={() => navigate("/")}
            className="menu-logo"
            src="/logo.svg"
            alt="logo"
          />
          <img
            onClick={() => setIsMenu(false)}
            title="close"
            className="menu-close-button"
            src="https://img.icons8.com/?size=100&id=46&format=png&color=000000"
            alt="cart"
          />
        </section>
        <div>
          <Filter />
        </div>
        <section>
          {sessionStorage.getItem("token") ? (
            <div className="menu-user-section">
              <section className="user-section-child">
                <Link to="/profile" className="profile-avatar-container">
                  <img className="avatar" src={userAvatar} alt="avatar" />
                </Link>
                <p>{userName ? userName : "anonymus"}</p>
              </section>

              <button onClick={handleLogOut} className="menu-setting_button">
                Log out
              </button>
            </div>
          ) : (
            <section className="menu-user-section">
              <button
                onClick={() => navigate("/auth/login")}
                className="menu-setting_button"
              >
                Log in
              </button>
            </section>
          )}
        </section>
      </div>
    </div>,
    document.body
  );
}
