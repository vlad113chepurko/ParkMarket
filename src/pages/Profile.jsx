import Breadcrumbs from "../components/BreadCrumps";
import NoImage from "../assets/NoImage.jpeg";
import SaveMessage from "../components/SaveMessage";

import { useUserStore } from "../store/useUserStore";
import { useSaveStore } from "../store/useSaveStore";
import { useLoadUser } from "../hooks/useUserLoad";

// styles
import "../styles/Home.css";
import "../styles/Profile.css";

export default function Profile() {
  const { isSave, setIsSave } = useSaveStore();
  const {
    userName,
    userDescription,
    userAvatar,
    setUserName,
    setUserDescription,
    setUserAvatar,
  } = useUserStore();

  const handleChangeAvatar = async (e) => {
    console.log("Event:", e);
    console.log("Files:", e?.target?.files);

    const file = e.target.files[0];
    if (file) {
      const formData = new FormData();
      formData.append("avatar", file);

      const token = sessionStorage.getItem("token");

      const response = await fetch("http://localhost:3000/upload-avatar", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });

      if (!response.ok) {
        console.error("Failed to upload avatar");
        return;
      }

      const result = await response.json();
      setUserAvatar(result.avatarUrl);
    }
  };

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
          <i
            title="1024px by 1024px recommended"
            className="avatar-container"
            onClick={() => document.getElementById("avatarInput").click()}
          >
            <img
              id="imageElement"
              onClick={handleChangeAvatar}
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
    </div>
  );
}
