import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Link from "next/link";
import Head from "next/head";

import styles from "../styles/Tracker.module.css";
import {
  removeSelectedPlant,
  addSelectedPlants,
  addExtraScore,
  subtractExtraScore,
  getToday,
} from "../store/user";

import { FilterPanel } from "../components/FilterPanel";

export const getStaticProps = async () => {
  const res = await fetch(
    `https://api.airtable.com/v0/apprXnCLMqQbaOEvK/Table%201?api_key=${process.env.NEXT_PUBLIC_API_KEY}`
  );

  const data = await res.json();

  return {
    props: { apiPlants: data.records },
  };
};

export default function Tracker({ apiPlants }) {
  const dailyPlants = useSelector(getToday);
  const colors = Array.from(
    new Set(apiPlants.map((plant) => plant.fields.Color))
  );

  let [color, setColor] = useState("");
  let [fruitCheck, setFruitCheck] = useState(true);
  let [vegCheck, setVegCheck] = useState(true);

  return (
    <>
      <Head>
        <title>Plant Tracker</title>
      </Head>
      <div className="main-content">
        <h2>Let's Add More Plants</h2>
        <p>You can filter the plants by color and type</p>
        <div className={styles.tracker_container}>
          <div className={styles.tracker_display}>
            <FilterPanel colors={colors} setColor={setColor} />
          </div>
        </div>
      </div>
      <div className="main-footer">
        <Link href="/" passHref>
          <button className="button--primary">I am done</button>
        </Link>
      </div>
    </>
  );
}
