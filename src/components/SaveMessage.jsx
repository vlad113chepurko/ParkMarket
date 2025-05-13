import "../styles/components/Save.css";
import "../styles/components/Error.css";

import { useSaveStore } from "../store/useSaveStore";
import { useSaveChanges } from "../hooks/useSaveChanges";

export default function SaveMessage() {
  const { setIsSave } = useSaveStore();
  const handleSaveChanges = useSaveChanges();
  return (
    <div className="save-container">
      <section className="error-section">
        <img
          src="https://img.icons8.com/?size=100&id=31337&format=png&color=d5ccab"
          alt="alert"
        />
        <p>Do you want to save changes?</p>
      </section>
      <section className="error-section">
        <button className="save-changes" onClick={handleSaveChanges}>
          Save changes
        </button>
        <button className="error-button" onClick={() => setIsSave(false)}>
          Don't save
        </button>
      </section>
    </div>
  );
}
