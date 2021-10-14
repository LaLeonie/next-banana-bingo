import Link from "next/link";
import router, { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faArrowLeft,
  faQuestion,
} from "@fortawesome/free-solid-svg-icons";

import { scoreCalculator } from "../../utils/scoreCalculator";
import { getToday } from "../../store/user";

const StartNavbar = () => {
  return (
    <div className="button-container">
      <Link href="/dashboard" passHref>
        <button>Dashboard</button>
      </Link>
      <Link href="/info" passHref>
        <button className="button-icon">
          <FontAwesomeIcon icon={faQuestion} />
        </button>
      </Link>
    </div>
  );
};

const GameNavbar = () => {
  const { initialScore, extraScore } = useSelector(getToday);
  let scoreSum = scoreCalculator({ initialScore, extraScore });

  return (
    <>
      <div className="button-container">
        <Link href="/" passHref>
          <button className="button-icon">
            <FontAwesomeIcon icon={faHome} />
          </button>
        </Link>
        <button onClick={() => router.back()} className="button-icon">
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>
      </div>
      <h1>Banana Bingo</h1>
      <div>Score: {scoreSum}</div>
    </>
  );
};

export default function Navbar({ children }) {
  const router = useRouter();
  const path = router.pathname;

  return (
    <div className={`navbar ${path === "/" ? "navbar-start" : "navbar-game"}`}>
      {path === "/" ? <StartNavbar /> : <GameNavbar />}
    </div>
  );
}
