import { useState } from "react";
import { useSelector } from "react-redux";

import { getPlayedToday } from "../store/game";
import { BingoGame } from "./BingoGame";
import { Countdown } from "./Countdown";

export const GameBoard = ({ plants }) => {
  const [countdownDisplay, setCountdownDisplay] = useState(true);
  const playedToday = useSelector(getPlayedToday);

  const PlayedMessage = (
    <div>
      You have already played today. Come back tomorrow for another round of
      banana bingo!
    </div>
  );

  return (
    <>
      {playedToday ? (
        PlayedMessage
      ) : countdownDisplay ? (
        <Countdown setCountdownDisplay={setCountdownDisplay} />
      ) : (
        <BingoGame plants={plants} />
      )}
    </>
  );
};
