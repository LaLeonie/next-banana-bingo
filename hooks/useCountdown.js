import { useState, useEffect } from "react";

export const useCountdown = (time, interval) => {
  let [count, setCount] = useState(time);
  let [display, setDisplay] = useState(true);

  useEffect(() => {
    const timerId = setInterval(() => {
      setCount(count--);
    }, interval);
    if (count === 0) {
      setDisplay(false);
    }
    return () => clearInterval(timerId);
  }, [count, interval]);

  return { display, count };
};
