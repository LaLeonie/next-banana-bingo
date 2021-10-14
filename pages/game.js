import Link from "next/link";
import Head from "next/head";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

import styles from "../styles/Game.module.css";
import { getDifficulty } from "../store/game";
import { filterPlantsByDifficulty } from "../utils/filterPlantsByDifficulty";

import { Countdown } from "../components/Countdown";
import { BingoGame } from "../components/BingoGame";

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
  const [countdownDisplay, setCountdownDisplay] = useState(true);
  let difficultyLevel = useSelector(getDifficulty);

  const filteredPlants = filterPlantsByDifficulty(plants, difficultyLevel)
    .sort(() => 0.5 - Math.random())
    .slice(0, 25);

  return (
    <>
      <Head>
        <title>The Game</title>
      </Head>
      <div className="main-content">
        {countdownDisplay ? (
          <Countdown setCountdownDisplay={setCountdownDisplay} />
        ) : (
          <BingoGame plants={filteredPlants} />
        )}
      </div>
      <div className="main-footer">
        <Link href="/result" passHref>
          <button className="button--primary">I&apos;m done</button>
        </Link>
      </div>
    </>
  );
}
