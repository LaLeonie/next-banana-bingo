import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Game.module.css";

export const getStaticProps = async () => {
  const res = await fetch(
    `https://api.airtable.com/v0/apprXnCLMqQbaOEvK/Table%201?api_key=${process.env.NEXT_PUBLIC_API_KEY}`
  );

  const data = await res.json();

  //select 25 random plants from API data
  const randomData = data.records.sort(() => 0.5 - Math.random()).slice(0, 25);

  return {
    props: { plants: randomData },
  };
};

export default function Game({ plants }) {
  return (
    <>
      <Head>
        <title>The Game</title>
      </Head>
      <div className="main-content">
        <ul className={styles.game_board}>
          {plants &&
            plants.map((plant, i) => (
              <li key={plant.id} id={i} className={styles.game_field}>
                <Image
                  src={plant.fields.Image[0].url}
                  alt={plant.fields.Name}
                  width={85}
                  height={85}
                />
              </li>
            ))}
        </ul>
      </div>
      <div className="main-footer">
        <Link href="/result" passHref>
          <button className="button--primary">I am done</button>
        </Link>
      </div>
    </>
  );
}
