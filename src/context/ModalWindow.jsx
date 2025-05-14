import { useContext } from "react";
import { ModalContext } from "../context/ModalContext";
import ReactDOM from "react-dom";

export default function ModalWindow() {
  const { isOpen, setIsOpen, modalWindowText } = useContext(ModalContext);
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="modal">
      <article className="profile-pages-article">
        <img
          src="https://img.icons8.com/?size=100&id=98955&format=png&color=12B886"
          alt="ok"
          width={25}
          height={25}
        />
        <p>{modalWindowText} added to cart!</p>
      </article>
      <img
        className="close-button"
        onClick={() => setIsOpen(false)}
        src="https://img.icons8.com/?size=100&id=71200&format=png&color=ec9a9a"
        alt="close"
      />
    </div>,
    document.body
  );
}
