import styles from "../styles/Home.module.css";
import { useSelector, useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

import { getDifficulty, changeDifficulty } from "./../store/game";

export const Settings = ({ setShowSettings }) => {
  const difficulties = ["easy", "medium", "hard"];
  const dispatch = useDispatch();
  const difficulty = useSelector(getDifficulty);

  const handleButtonClick = (type) => {
    dispatch(changeDifficulty(type));
  };

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
          <button
            className={difficulty === type ? "selected" : ""}
            onClick={() => handleButtonClick(type)}
            key={i}
          >
            {type}
          </button>
        ))}
      </div>
    </div>
  );
};
