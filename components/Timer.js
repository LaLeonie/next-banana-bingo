import { useEffect } from "react";
import styles from "../styles/Game.module.css";
import ProgressBar from "react-customizable-progressbar";

import { useCountdown } from "../hooks/useCountdown";

export const Timer = ({ endGame }) => {
  const total = 20;
  const { display, count } = useCountdown(total, 1000);

  const getProgress = () => {
    return (count / total) * 100;
  };

  const getColor = () => {
    if (count > total * 0.4) return "#67D723";
    if (count > total * 0.2) return "#FF9000";
    return "#FF3A1A";
  };

  const getSeconds = () => {
    let s = 0;
    s = Math.trunc(count % 60);
    s = ("00" + s).slice(-2);

    return s;
  };

  useEffect(() => {
    if (!display) {
      endGame();
    }
  }, [display]);

  return (
    <div className={styles.timer_container}>
      <ProgressBar
        trackStrokeColor={"transparent"}
        progress={getProgress()}
        radius={70}
        counterClockwise
        strokeColor={getColor()}
      >
        <div className={styles.timer_display}>
          <div className={styles.timer_time}>{getSeconds()}</div>
          <div>SECONDS</div>
        </div>
      </ProgressBar>
    </div>
  );
};
