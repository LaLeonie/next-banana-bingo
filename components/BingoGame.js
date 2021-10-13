import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Game.module.css";

export const BingoGame = ({ plants }) => {
  return (
    <div>
      <ul className={styles.game_board}>
        {plants &&
          plants.map((plant, i) => (
            <li key={plant.id} id={i} className={styles.game_field}>
              <Image
                src={plant.fields.Image[0].url}
                alt={plant.fields.Name}
                width={85}
                height={85}
              />
            </li>
          ))}
      </ul>
    </div>
  );
};
