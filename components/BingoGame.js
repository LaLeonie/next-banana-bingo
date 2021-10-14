import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Game.module.css";

import { Timer } from "./Timer";

export const BingoGame = ({ plants }) => {
  const [timerDisplay, setTimerdisplay] = useState(true);

  return (
    <>
      {timerDisplay && <Timer setTimerdisplay={setTimerdisplay} />}
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
    </>
  );
};
