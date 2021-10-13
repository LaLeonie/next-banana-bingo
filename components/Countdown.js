import styles from "../styles/Game.module.css";
import { useCountdown } from "../hooks/useCountdown";

export const Timer = () => {
  let [displayText, setDisplayText] = useState("");
  let { display, count } = useCountdown(3, 500);

  useEffect(() => {
    switch (count) {
      case 3:
        setDisplayText("Ready");
        break;
      case 2:
        setDisplayText("Steady");
        break;
      case 1:
        setDisplayText("GO");
        break;
      default:
        setDisplayText("");
    }
  }, [setDisplayText, count]);

  return (
    <dialog className="countdown-container">
      <div className="countdown-display">{displayText}</div>
    </dialog>
  );
};
