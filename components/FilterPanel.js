import styles from "../styles/Tracker.module.css";

export const FilterPanel = ({ setColor, colors }) => {
  const handleColorSelect = (e, col) => {
    setColor(col);
    e.target.parentNode
      .querySelectorAll("li")
      .forEach((el) => el.classList.remove(styles.selected));

    e.target.classList.toggle(styles.selected);
  };

  return (
    <div className={styles.filter_container}>
      <ul className={styles.colors_list}>
        {colors.map((col) => (
          <li
            onClick={(e) => handleColorSelect(e, col)}
            key={col}
            className={`${styles.color_item} ${styles[col]}`}
          />
        ))}
      </ul>
    </div>
  );
};
