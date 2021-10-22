import Link from "next/link";
import Head from "next/head";

export default function Info() {
  return (
    <>
      <Head>
        <title>Info</title>
      </Head>
      <div className="main-content instructions">
        <h2>How To Play?</h2>
        <div>
          Banana Bingo is as easy as standard Bingo. You win if you strike 5
          plants in a row - horizontally, vertically and diagonally. You may
          only select plants that you've eaten today. So to win, you must have
          had your 5 A Day! Be quick, the timer is running. And beware, you can
          only play once a day!
        </div>
        <ul>
          <li>For a Bingo, you gain 10 stars</li>
          <li>For every plant you ate, you gain an extra stars</li>
        </ul>
        <div>
          So the more plants you eat in a day, the higher your score. Don't
          worry if you don't find all your plants first, you can add extra
          plants after the game.
        </div>
        <div>
          If the plants are too exotic for you (or not exotic enough), you can
          always change the selection in the settings.
        </div>
        <div>Happy Bingo!</div>
      </div>

      <div className="main-footer main-footer-centered">
        <Link href="/dashbard" passHref>
          <button>Go Back</button>
        </Link>
      </div>
    </>
  );
}
