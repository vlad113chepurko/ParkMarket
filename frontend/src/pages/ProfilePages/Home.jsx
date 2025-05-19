import React from "react";
import "../../styles/pages/ProfilePages.css";
import { useUserStore } from "../../store/useUserStore";

export default function ProfileHome() {
  const { userName, userDescription, userAvatar, completed } = useUserStore();

  return (
    <div className="profile-pages-container">
      <article className="profile-pages-top-article">
        <h1>Your Patreon is ready! Here’s how to make it yours</h1>
        <p>
          Adding some details helps visitors learn more about you and what you
          plan to share here.
        </p>
        <span className="green">{completed} of 3 complete</span>
      </article>

      <section className="profile-pages-section">
        <article className="profile-pages-article">
          <img
            src="https://img.icons8.com/?size=100&id=5401&format=png&color=b4b39c"
            alt="camera"
            width={30}
            height={30}
          />
          <p>Add a profile avatar</p>
        </article>
        <i className={`circle ${userAvatar ? "green-circle" : "red-circle"}`}>
          <img
            src={
              userAvatar
                ? "https://img.icons8.com/?size=100&id=98955&format=png&color=12B886"
                : "https://img.icons8.com/?size=100&id=46&format=png&color=FA5252"
            }
            alt=""
            width={20}
            height={20}
          />
        </i>
      </section>

      <section className="profile-pages-section">
        <article className="profile-pages-article">
          <img
            src="https://img.icons8.com/?size=100&id=2951&format=png&color=b4b39c"
            alt="describe"
            width={30}
            height={30}
          />
          <p>Describe your profile</p>
        </article>
        <i
          className={`circle ${
            userDescription ? "green-circle" : "red-circle"
          }`}
        >
          <img
            src={
              userDescription
                ? "https://img.icons8.com/?size=100&id=98955&format=png&color=12B886"
                : "https://img.icons8.com/?size=100&id=46&format=png&color=FA5252"
            }
            alt=""
            width={20}
            height={20}
          />
        </i>
      </section>

      <section className="profile-pages-section">
        <article className="profile-pages-article">
          <img
            src="https://img.icons8.com/?size=100&id=98957&format=png&color=b4b39c"
            alt="name"
            width={30}
            height={30}
          />
          <p>Add your name to profile</p>
        </article>
        <i className={`circle ${userName ? "green-circle" : "red-circle"}`}>
          <img
            src={
              userName
                ? "https://img.icons8.com/?size=100&id=98955&format=png&color=12B886"
                : "https://img.icons8.com/?size=100&id=46&format=png&color=FA5252"
            }
            alt=""
            width={20}
            height={20}
          />
        </i>
      </section>
    </div>
  );
}
