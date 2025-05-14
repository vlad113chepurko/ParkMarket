import React from "react";
import "../styles/components/ConfigurationMenu.css";
import { useNavigate } from "react-router-dom";
export default function ConfigurationMenu() {
  const navigate = useNavigate();
  const handleLogOut = () => {
    sessionStorage.removeItem("token");
    navigate("/");
    window.location.reload();
  };
  return (
    <span className="configuration-menu">
      <button
        onClick={handleLogOut}
        className="configuration-menu-setting_button"
      >
        Log out
      </button>
    </span>
  );
}
