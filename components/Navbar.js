import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import { faHome, faArrowLeft } from "@fortawesome/free-solid-svg-icons"; // import the icons you need

export default function Navbar({ children }) {
  return (
    <div className="navbar">
      <div>
        <Link href="/" passHref>
          <FontAwesomeIcon icon={faHome} />
        </Link>
      </div>
    </div>
  );
}
