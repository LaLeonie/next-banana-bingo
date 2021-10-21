import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import { BingoGame } from "./BingoGame";
import { getPlayedToday } from "../store/game";

export const GameBoard = ({ plants }) => {
  const playedToday = useSelector(getPlayedToday);
  const [displayPlayedMessage, setDisplayPlayedMessage] = useState(false);

  useEffect(() => {
    if (playedToday) {
      setTimeout(() => {
        setDisplayPlayedMessage(true);
      }, 4000);
    }
  }, [playedToday]);

  const PlayedMessage = (
    <div>
      You have already played today. Come back tomorrow for another round of
      banana bingo!
    </div>
  );

  return (
    <>{displayPlayedMessage ? PlayedMessage : <BingoGame plants={plants} />}</>
  );
};
