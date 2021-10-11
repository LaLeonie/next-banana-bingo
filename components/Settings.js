import styles from "../styles/Home.module.css";

export const Settings = ({ setShowSettings }) => {
  const difficulties = ["easy", "medium", "hard"];

  return (
    <div className={styles.modal}>
      <h2>Set The Difficulty Level</h2>
      <div className="button-container">
        {difficulties.map((type, i) => (
          <button key={i}>{type}</button>
        ))}
      </div>
    </div>
  );
};
