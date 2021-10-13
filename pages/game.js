import Link from "next/link";
import Head from "next/head";
import { useState } from "react";
import Image from "next/image";

import styles from "../styles/Game.module.css";
import { Countdown } from "../components/Countdown";
import { BingoGame } from "../components/BingoGame";

export const getStaticProps = async () => {
  const res = await fetch(
    `https://api.airtable.com/v0/apprXnCLMqQbaOEvK/Table%201?api_key=${process.env.NEXT_PUBLIC_API_KEY}`
  );

  const data = await res.json();

  //select 25 random plants from API data
  const randomData = data.records.sort(() => 0.5 - Math.random()).slice(0, 25);

  return {
    props: { plants: randomData },
  };
};

export default function Game({ plants }) {
  const [countdownDisplay, setCountdownDisplay] = useState(true);
  return (
    <>
      <Head>
        <title>The Game</title>
      </Head>
      <div className="main-content">
        {countdownDisplay ? (
          <Countdown setCountdownDisplay={setCountdownDisplay} />
        ) : (
          <BingoGame plants={plants} />
        )}
      </div>
      <div className="main-footer">
        <Link href="/result" passHref>
          <button className="button--primary">I am done</button>
        </Link>
      </div>
    </>
  );
}
