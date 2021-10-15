import { useEffect } from "react";
import { useSelector } from "react-redux";

import { getToday } from "../store/user";

export const ResultAlert = () => {
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
    setTimeout(() => {}, 3000);
  }, []);

  return (
    <dialog>
      <div victory={victory}>{message}</div>
    </dialog>
  );
};
