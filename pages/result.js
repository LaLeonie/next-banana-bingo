import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Link from "next/link";
import Head from "next/head";

import styles from "./../styles/Result.module.css";
import { getToday } from "../store/user";
import PlantList from "../components/shared/PlantList";

const victoryMessage = (
  <>
    <h2>What a victory!</h2>
    <p>You also get a star for every plant you ate today</p>
  </>
);

const loseMessage = (
  <>
    <h2>Don't worry!</h2>
    <p>Tomorrow is another day.</p>
    <p>You still get a star for every plant you ate today.</p>
  </>
);

export default function Result() {
  const dispatch = useDispatch();
  const { victory, dailyPlants, extraScore } = useSelector(getToday);
  const newScore = dailyPlants.length;

  return (
    <>
      <Head>
        <title>Result</title>
      </Head>
      <div className="main-content">
        {victory ? victoryMessage : loseMessage}
        <PlantList plants={dailyPlants} />
      </div>

      <div className="main-footer main-footer-centered">
        <div className="button-container">
          <Link href="/tracker" passHref>
            <button className="button--primary">Yes, I had more</button>
          </Link>
          <Link href="/dashboard" passHref>
            <button>No, that is all I had</button>
          </Link>
        </div>
      </div>
    </>
  );
}
