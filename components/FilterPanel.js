import styles from "../styles/Tracker.module.css";

export const FilterPanel = ({ setColor, colors }) => {
  const handleColorSelect = (e, col) => {
    setColor(col);
    e.target.parentNode
      .querySelectorAll("li")
      .forEach((el) => el.classList.remove(styles.selected));

    e.target.classList.toggle(styles.selected);
  };

  const handleTypeSelect = (type) => {
    if (type === "fruit") {
      console.log("fruit");
      // setFruitCheck(!fruitCheck);
    } else {
      // setVegCheck(!vegCheck);
    }
  };

  return (
    <div className={styles.filter_container}>
      <ul className={styles.colors_filter}>
        {colors.map((col) => (
          <li
            onClick={(e) => handleColorSelect(e, col)}
            key={col}
            className={`${styles.color_item} ${styles[col]}`}
          />
        ))}
      </ul>
      <div className={styles.type_filter}>
        <div className={styles.type_field}>
          <input
            type="checkbox"
            id="fruit"
            name="fruit"
            onChange={() => handleTypeSelect("fruit")}
          />
          <label htmlFor="fruit">Fruit</label>
        </div>
        <div className={styles.type_field}>
          <input
            type="checkbox"
            id="veg"
            name="veg"
            onChange={() => handleTypeSelect("veg")}
          />
          <label htmlFor="fruit">Veg</label>
        </div>
      </div>
    </div>
  );
};
