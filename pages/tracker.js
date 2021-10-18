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
import PlantList from "../components/shared/PlantList";

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
  const dispatch = useDispatch();
  const { dailyPlants } = useSelector(getToday);
  const colors = Array.from(
    new Set(apiPlants.map((plant) => plant.fields.Color))
  );
  console.log(dailyPlants);

  let [color, setColor] = useState("");
  let [fruitCheck, setFruitCheck] = useState(true);
  let [vegCheck, setVegCheck] = useState(true);

  const handlePlanItemClick = (e) => {
    let node = e.target.parentNode;
    let plantName;
    if (e.target.nodeName === "LI") {
      node = e.target;
    }

    plantName = node.getAttribute("name");

    if (node.classList.contains("plant_item--selected")) {
      dispatch(removeSelectedPlant(plantName));
      dispatch(subtractExtraScore(1));
    }

    if (!node.classList.contains("plant_item--selected")) {
      let plantObject = apiPlants.find((obj) => obj.fields.Name === plantName);

      if (!dailyPlants.find((obj) => obj.fields.Name === plantName)) {
        dispatch(addSelectedPlants([plantObject]));
        dispatch(addExtraScore(1));
      }
    }
  };

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
          <div className={styles.tracker_sidebar}>
            <h3>Your Plant List</h3>
            <PlantList
              handlePlanItemClick={handlePlanItemClick}
              selected
              selectable
              narrow
              plants={dailyPlants}
            />
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
