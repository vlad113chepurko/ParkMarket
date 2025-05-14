import { useState } from "react";
import { NavLink } from "react-router-dom";
import "../styles/components/ProfileNavigation.css";

export default function ProfileNavigation() {
  const [activeLink, setActiveLink] = useState("Home");

  const navItems = [
    { path: "home", label: "Home" },
    { path: "collection", label: "Collection" },
    { path: "shop", label: "Shop" },
    { path: "membership", label: "Membership" },
    { path: "recomendations", label: "Recomendations" },
  ];

  return (
    <div className="profile-nav-wrapper">
      <nav className="nav-bar">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            {item.label}
          </NavLink>
        ))}
      </nav>
    </div>
  );
}
