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
      <div>
        <Link href="/" passHref>
          <button>
            <FontAwesomeIcon icon={faHome} />
          </button>
        </Link>
        <button onClick={() => router.back()}>
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>
      </div>
      <p>Banana Bingo</p>
      <div>
        <Link href="/dashboard" passHref>
          <button>Dashboard</button>
        </Link>
        <Link href="/info" passHref>
          <button>
            <FontAwesomeIcon icon={faQuestion} />
          </button>
        </Link>
      </div>
    </div>
  );
}
