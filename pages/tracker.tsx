import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Link from "next/link";
import Head from "next/head";
import { GetStaticProps } from "next";
import { MouseEvent } from "react";

import styles from "../styles/Tracker.module.css";
import {
  removeSelectedPlant,
  addSelectedPlants,
  addExtraScore,
  subtractExtraScore,
  getToday,
} from "../store/user";

import { Plant } from "../types";
import { FilterPanel } from "../components/FilterPanel";
import PlantList from "../components/shared/PlantList";

type TrackerProps = {
  apiPlants: Plant[];
};

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch(
    `https://api.airtable.com/v0/apprXnCLMqQbaOEvK/Table%201?api_key=${process.env.NEXT_PUBLIC_API_KEY}`
  );

  const data = await res.json();

  return {
    props: { apiPlants: data.records },
  };
};

const Tracker: React.FC<TrackerProps> = ({ apiPlants }) => {
  const dispatch = useDispatch();
  const { dailyPlants } = useSelector(getToday);

  const colors = Array.from(
    new Set(apiPlants.map((plant: Plant) => plant.fields.Color))
  );

  let [color, setColor] = useState<string>("");
  let [fruitCheck, setFruitCheck] = useState<boolean>(true);
  let [vegCheck, setVegCheck] = useState<boolean>(true);

  const getFilteredPlants = (
    plants: Plant[],
    color: string,
    fruit: boolean,
    veg: boolean
  ) => {
    let displayPlants = plants.filter(
      (obj) => dailyPlants.findIndex((el) => el.id === obj.id) === -1
    );

    return displayPlants.filter(
      (el) =>
        el.fields.Color === color &&
        ((fruit && el.fields.Type === "Fruit") ||
          (veg && el.fields.Type === "Veg"))
    );
  };

  const handlePlanItemClick = (e: React.MouseEvent<HTMLElement>) => {
    let node = e.target.parentNode.parentNode;
    let plantName: string;
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
            <FilterPanel
              colors={colors}
              setColor={setColor}
              setFruitCheck={setFruitCheck}
              setVegCheck={setVegCheck}
              vegCheck={vegCheck}
              fruitCheck={fruitCheck}
            />
            <PlantList
              handlePlanItemClick={handlePlanItemClick}
              displayName
              selectable
              plants={getFilteredPlants(apiPlants, color, fruitCheck, vegCheck)}
            />
          </div>

          <div className={styles.tracker_sidebar}>
            <h3 className="subtitle">Your Plant List</h3>
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
        <Link href="/result" passHref>
          <button className="button--primary">I am done</button>
        </Link>
      </div>
    </>
  );
};

export default Tracker;
