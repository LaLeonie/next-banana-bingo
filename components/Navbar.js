import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import {
  faHome,
  faArrowLeft,
  faQuestion,
} from "@fortawesome/free-solid-svg-icons"; // import the icons you need
import router, { useRouter } from "next/router";

export default function Navbar({ children }) {
  const router = useRouter();
  return (
    <div className="navbar">
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
      <p>Banana Bingo</p>
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
    </div>
  );
}
