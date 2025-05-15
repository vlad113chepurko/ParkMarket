import React from "react";
import { useState } from "react";
import { ModalContext } from "../../context/ModalContext";
import MenuContainer from "./MenuContainer";
import "../../styles/components/Menu.css";

export default function Menu() {
  const [isMenu, setIsMenu] = useState(false);
  return (
    <ModalContext.Provider value={{ setIsMenu, isMenu }}>
      <button onClick={() => setIsMenu(true)} className="menu-button">
        <img
          src="https://img.icons8.com/?size=100&id=3096&format=png&color=1A1A1A"
          alt=""
          width={40}
          height={40}
        />
      </button>
      {isMenu && <MenuContainer />}
    </ModalContext.Provider>
  );
}
