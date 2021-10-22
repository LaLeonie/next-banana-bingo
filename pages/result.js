import { useSelector, useDispatch } from "react-redux";

import Link from "next/link";
import Head from "next/head";

import styles from "./../styles/Result.module.css";
import { getToday } from "../store/user";
import PlantList from "../components/shared/PlantList";

export default function Result() {
  const dispatch = useDispatch();
  const { victory, dailyPlants } = useSelector(getToday);

  const victoryMessage = (
    <>
      <h2 className={styles.header}>What a victory!</h2>
      <p>You also get a star for every plant you ate today</p>
    </>
  );

  const loseMessage = (
    <>
      <h2 className={styles.header}>Don't worry!</h2>
      <div>Tomorrow you have another chance to win Banana Bingo.</div>
      <div>
        {dailyPlants.length > 0
          ? "You still get a star for every plant you ate today."
          : "But make sure to eat more plants tomorrow."}
      </div>
    </>
  );

  return (
    <>
      <Head>
        <title>Result</title>
      </Head>
      <div className="main-content">
        {victory ? victoryMessage : loseMessage}

        {dailyPlants.length > 0 && <PlantList plants={dailyPlants} />}
        <div className={styles.question}>
          Have you eaten any more plants today?
        </div>
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
