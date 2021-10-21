import { useSelector } from "react-redux";

import { BingoGame } from "./BingoGame";
import { getPlayedToday } from "../store/game";

export const GameBoard = ({ plants }) => {
  const playedToday = useSelector(getPlayedToday);

  const PlayedMessage = (
    <div>
      You have already played today. Come back tomorrow for another round of
      banana bingo!
    </div>
  );

  return <>{playedToday ? PlayedMessage : <BingoGame plants={plants} />}</>;
};
