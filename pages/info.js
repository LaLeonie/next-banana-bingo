import Link from "next/link";
import Head from "next/head";

export default function Info() {
  return (
    <>
      <Head>
        <title>Info</title>
      </Head>
      <div className="main-content">
        <h2>How To Play?</h2>
        <p>
          Banana Bingo is as easy as standard Bingo. You win if you strike 5
          plants in a row - horizontally, vertically and diagonally. You may
          only select plants that you've eaten today. So to win, you must have
          had your 5 A Day! Be quick, the timer is running. And beware, you can
          only play once a day!
        </p>
        <ul>
          <li>For a Bingo, you gain 10 stars</li>
          <li>For every plant you ate, you gain an extra stars</li>
        </ul>
        <p>
          So the more plants you eat in a day, the higher your score. Don't
          worry if you don't find all your plants first, you can add extra
          plants after the game.
        </p>
        <p>
          If the plants are too exotic for you (or not exotic enough), you can
          always change the selection in the settings.
        </p>
        <p>Happy Bingo!</p>
      </div>

      <div className="main-footer main-footer-centered">
        <Link href="/dashbard" passHref>
          <button>Go Back</button>
        </Link>
      </div>
    </>
  );
}
