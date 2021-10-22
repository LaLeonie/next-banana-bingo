import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import styles from "./../styles/Game.module.css";

import { changeGameStatus } from "../store/game";
import { getToday, addExtraScore } from "../store/user";

export const ResultAlert = ({ selection }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { victory } = useSelector(getToday);

  const message = victory ? (
    <>
      <h2>BINGO</h2>
      <p>You win 10 stars</p>
    </>
  ) : (
    <>
      <h2>TIME`S UP</h2>
      <p>No Bingo today</p>
    </>
  );

  useEffect(() => {
    setTimeout(() => {
      router.push("/result");
    }, 3000);

    setTimeout(() => {
      dispatch(changeGameStatus(true));
      dispatch(addExtraScore(selection.length));
    }, 3500);
  }, []);

  return (
    <dialog className={styles.result_container}>
      <div
        className={`${styles.result_display} ${
          victory ? styles.display_victory : styles.display_fail
        }`}
      >
        {message}
      </div>
    </dialog>
  );
};
