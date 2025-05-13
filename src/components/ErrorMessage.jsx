import { useErrorStore } from "../store/useErrorStore";
import "../styles/components/Error.css";

export default function ErrorMessage() {
  const { error, clearError } = useErrorStore();
  return (
    <div className="error">
      <section className="error-section">
        <img
          src="https://img.icons8.com/?size=100&id=31337&format=png&color=d5ccab"
          alt="alert"
        />
        <p>{error}</p>
      </section>
      <button className="error-button" onClick={clearError}>
        Close Error
      </button>
    </div>
  );
}
