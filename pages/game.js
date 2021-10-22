import { useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

import { getDifficulty, getPlayedToday, changeGameStatus } from "../store/game";
import { addSelectedPlants, addExtraScore } from "../store/user";

import { filterPlantsByDifficulty } from "../utils/filterPlantsByDifficulty";

import { GameBoard } from "../components/GameBoard";

export const getStaticProps = async () => {
  const res = await fetch(
    `https://api.airtable.com/v0/apprXnCLMqQbaOEvK/Table%201?api_key=${process.env.NEXT_PUBLIC_API_KEY}`
  );

  const data = await res.json();

  return {
    props: { plants: data.records },
  };
};

export default function Game({ plants }) {
  const dispatch = useDispatch();
  const router = useRouter();
  let difficultyLevel = useSelector(getDifficulty);
  const playedToday = useSelector(getPlayedToday);

  const [filteredPlants, setFilteredPlants] = useState([]);
  const [selection, setSelection] = useState([]);

  useEffect(() => {
    setFilteredPlants(
      filterPlantsByDifficulty(plants, difficultyLevel)
        .sort(() => 0.5 - Math.random())
        .slice(0, 25)
    );
  }, []);

  const handleClick = () => {
    dispatch(addSelectedPlants(selection));
    dispatch(addExtraScore(selection.length));
    router.push("/result");
    dispatch(changeGameStatus(true));
  };

  return (
    <>
      <Head>
        <title>The Game</title>
      </Head>
      <div className="main-content">
        <GameBoard
          selection={selection}
          setSelection={setSelection}
          plants={filteredPlants}
        />
      </div>
      <div className="main-footer">
        <button
          onClick={handleClick}
          disabled={playedToday}
          className="button--primary"
        >
          I&apos;m done
        </button>
      </div>
    </>
  );
}
