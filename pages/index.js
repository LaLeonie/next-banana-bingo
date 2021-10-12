import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";

import Layout from "../components/Layout";
import { Settings } from "../components/Settings";

export default function Home() {
  const [showSettings, setShowSettings] = useState(false);
  return (
    <>
      <Head>
        <title>Banana Bingo</title>
        <meta name="description" content="Plant tracking game for kids" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        {showSettings && <Settings setShowSettings={setShowSettings} />}
        <h1 className={styles.title}>Banana Bingo</h1>
        <div className="button-container">
          <button onClick={() => setShowSettings(true)}>Settings</button>
          <Link href="/game" passHref>
            <button className="button--primary">Let us Play</button>
          </Link>
        </div>
      </main>
    </>
  );
}
