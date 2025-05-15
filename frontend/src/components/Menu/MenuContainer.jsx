import React from "react";
import { useContext } from "react";
import { ModalContext } from "../../context/ModalContext";
import ReactDOM from "react-dom";
import "../../styles/components/Menu.css";

export default function MenuContainer() {
  const { isMenu, setIsMenu } = useContext(ModalContext);

  return ReactDOM.createPortal(
    <div className="menu-overlay">
      <div className='menu-content'>
        <section>
          <img src='/logo.svg' alt="logo" />
          <button onClick={() => setIsMenu(false)}>X</button>
        </section>
      </div>
    </div>,
    document.body
  );
}
