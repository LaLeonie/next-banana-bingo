import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faArrowLeft,
  faQuestion,
} from "@fortawesome/free-solid-svg-icons";
import router, { useRouter } from "next/router";

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
      <div>Score:</div>
    </>
  );
};

export default function Navbar({ children }) {
  const router = useRouter();
  const path = router.pathname;

  return (
    <div className="navbar">
      {path === "/" ? <StartNavbar /> : <GameNavbar />}
    </div>
  );
}
