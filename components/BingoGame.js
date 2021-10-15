import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Game.module.css";

import { positionCalculator } from "../utils/positionCalculator";
import { Timer } from "./Timer";

export const BingoGame = ({ plants }) => {
  const [timerDisplay, setTimerdisplay] = useState(true);
  const [selection, setSelection] = useState([]);

  const handlePlantClick = (e) => {
    const plantName = e.target.alt;
    console.log(plantName);
    if (plantName) {
      if (e.target.classList.contains("selected")) {
        setSelection(
          selection.filter((plant) => plant.fields.Name !== plantName)
        );
        e.target.classList.remove("selected");
      } else {
        const index = e.target.parentNode.id;
        const selectedPlant = plants.find(
          (plant) => plant.fields.Name === plantName
        );
        selectedPlant.position = positionCalculator(index);
        setSelection([...selection, selectedPlant]);
        e.target.classList.toggle("selected");
      }
    }
  };

  return (
    <>
      {timerDisplay && <Timer setTimerdisplay={setTimerdisplay} />}
      <ul className={styles.game_board} onClick={handlePlantClick}>
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
