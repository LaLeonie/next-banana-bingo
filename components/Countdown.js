import { useState, useEffect } from "react";
import styles from "../styles/Game.module.css";
import { useCountdown } from "../hooks/useCountdown";

export const Countdown = ({ setCountdownDisplay }) => {
  let [displayText, setDisplayText] = useState("");
  let { display, count } = useCountdown(3, 500);

  useEffect(() => {
    setCountdownDisplay(display);
  }, [setCountdownDisplay, display]);

  useEffect(() => {
    switch (count) {
      case 3:
        setDisplayText("Ready");
        break;
      case 2:
        setDisplayText("Steady");
        break;
      case 1:
        setDisplayText("GO");
        break;
      default:
        setDisplayText(count);
    }
  }, [setDisplayText, count]);

  return (
    <dialog className={styles.countdown_container}>
      <div className={styles.countdown_display}>{displayText}</div>
    </dialog>
  );
};
