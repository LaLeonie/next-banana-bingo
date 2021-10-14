import styles from "../styles/Home.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

export const Settings = ({ setShowSettings }) => {
  const difficulties = ["easy", "medium", "hard"];

  return (
    <div className={styles.modal}>
      <FontAwesomeIcon
        className={styles.close}
        icon={faTimes}
        onClick={() => setShowSettings(false)}
      />
      <h2>Set The Difficulty Level</h2>
      <div className="button-container--compressed">
        {difficulties.map((type, i) => (
          <button key={i}>{type}</button>
        ))}
      </div>
    </div>
  );
};
