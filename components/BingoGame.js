import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";
import styles from "../styles/Game.module.css";

import { changeGameStatus } from "../store/game";
import { addInitialScore, addVictory, addSelectedPlants } from "../store/user";
import { bingoLogic } from "../utils/bingoLogic";
import { positionCalculator } from "../utils/positionCalculator";
import { Timer } from "./Timer";
import { ResultAlert } from "./ResultAlert";

export const BingoGame = ({ plants }) => {
  const dispatch = useDispatch();

  const [showTimer, setShowTimer] = useState(true);
  const [selection, setSelection] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [playedToday, setPlayedToday] = useState(false);

  const endGame = () => {
    setShowResult(true);
    setShowTimer(false);
    dispatch(changeGameStatus(true));
    dispatch(addSelectedPlants(selection));
  };

  const handlePlantClick = (e) => {
    const plantName = e.target.alt;
    const listItem = e.target.parentNode.parentNode;

    if (plantName) {
      if (listItem.classList.contains(styles.selected)) {
        setSelection(
          selection.filter((plant) => plant.fields.Name !== plantName)
        );
        listItem.classList.remove(styles.selected);
      } else {
        const index = listItem.id;
        const selectedPlant = plants.find(
          (plant) => plant.fields.Name === plantName
        );
        selectedPlant.position = positionCalculator(index);

        setSelection([...selection, selectedPlant]);

        listItem.classList.toggle(styles.selected);
      }
    }
  };

  //bingo logic
  useEffect(() => {
    if (selection.length >= 5) {
      const positions = selection.map((el) => el.position);

      if (bingoLogic(positions)) {
        dispatch(addVictory());
        dispatch(addInitialScore(10));
        endGame();
        setTimeout(() => {
          setPlayedToday(true);
        }, 500);
      }
    }
  }, [selection, dispatch]);

  const PlayedMessage = (
    <div>
      You have already played today. Come back tomorrow for another round of
      banana bingo!
    </div>
  );

  return (
    <>
      {showTimer && <Timer endGame={endGame} />}
      {showResult && <ResultAlert />}

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
