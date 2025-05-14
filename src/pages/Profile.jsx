import Breadcrumbs from "../components/BreadCrumps";
import NoImage from "../assets/NoImage.jpeg";
import SaveMessage from "../components/SaveMessage";
import ConfigurationMenu from "../components/ConfigurationMenu";
import ProfileNavigation from "../components/PorfileNavigation";

import handleChangeAvatar from "../hooks/handleChangeAvatar";
import { Outlet } from "react-router-dom";
import { useUserStore } from "../store/useUserStore";
import { useSaveStore } from "../store/useSaveStore";
import { useLoadUser } from "../hooks/useUserLoad";
import { useState } from "react";

// styles
import "../styles/pages/Home.css";
import "../styles/pages/Profile.css";



export default function Profile() {
  const { isSave, setIsSave } = useSaveStore();
  const [isConfigurationMenu, setIsConfigurationMenu] = useState(false);
  const {
    userName,
    userDescription,
    userAvatar,
    setUserName,
    setUserDescription,
  } = useUserStore();
  const isLoading = useLoadUser();
  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="home">
      {isSave && <SaveMessage />}
      <Breadcrumbs />
      <div className="profile-content">
        <div className="profile-wrapper">
          <div className="profile-configuration">
            <button
              className="configuration-menu-btn"
              title="settings"
              onClick={() => setIsConfigurationMenu((prev) => !prev)}
            >
              <img
                src="https://img.icons8.com/?size=100&id=36944&format=png&color=505143"
                alt="config"
                width={20}
                height={20}
              />
            </button>
            {isConfigurationMenu && <ConfigurationMenu />}
          </div>
          <i
            title="1024px by 1024px recommended"
            className="avatar-container"
            onClick={() => document.getElementById("avatarInput").click()}
          >
            <img
              id="imageElement"
              className="avatar"
              src={userAvatar ? userAvatar : NoImage}
              alt="avatar"
            />
          </i>

          <input
            id="avatarInput"
            type="file"
            accept="image/*"
            style={{ display: "none" }}
            onChange={handleChangeAvatar}
          />

          <input
            className={`input ${!userName ? "input-creator" : ""}`}
            type="text"
            value={userName}
            placeholder="Creator Name"
            onChange={(e) => setUserName(e.target.value)}
            onClick={() => setIsSave(true)}
            minLength={5}
            maxLength={20}
            required
          />
          <input
            className={`input input-description ${
              !userDescription ? "input-creator-description" : ""
            }`}
            type="text"
            value={userDescription}
            placeholder="Add headline"
            onChange={(e) => setUserDescription(e.target.value)}
            onClick={() => setIsSave(true)}
            minLength={5}
            maxLength={50}
            required
          />
        </div>
      </div>
      <ProfileNavigation />
      <Outlet />
    </div>
  );
}
