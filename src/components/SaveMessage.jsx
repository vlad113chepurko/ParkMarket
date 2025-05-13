import "../styles/Save.css";
import "../styles/Error.css";
import { useErrorStore } from "../components/ErrorMessage";

export default function SaveMessage() {
  const { error, clearError } = useErrorStore();
  return (
    <div className="save-container">
      <section className="error-section">
        <img
          src="https://img.icons8.com/?size=100&id=31337&format=png&color=d5ccab"
          alt="alert"
        />
        <p>{error}</p>
      </section>
      <button className="save-changes">
        Save changes
      </button>
      <button className="error-button" onClick={clearError}>
        Don't save
      </button>
    </div>
  );
}
