import { useState } from "react";
import { useSelector } from "react-redux";

import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

import { Settings } from "../components/Settings";
import { getPlayedToday } from "../store/game";

export default function Home() {
  const playedToday = useSelector(getPlayedToday);
  const [showSettings, setShowSettings] = useState(false);
  return (
    <>
      <Head>
        <title>Banana Bingo</title>
        <meta name="description" content="Plant tracking game for kids" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="main-content">
        {showSettings && <Settings setShowSettings={setShowSettings} />}
        <h1 className={styles.title}>Banana Bingo</h1>
        {playedToday && (
          <div className={styles.alert_message}>
            You have already played today. <br></br>Come back tomorrow for
            another round of Banana Bingo!
          </div>
        )}

        <div className="button-container button-container--centered ">
          <button disabled={playedToday} onClick={() => setShowSettings(true)}>
            Settings
          </button>
          <Link href="/game" passHref>
            <button disabled={playedToday} className="button--primary">
              Let&apos;s Play
            </button>
          </Link>
        </div>
      </main>
    </>
  );
}
