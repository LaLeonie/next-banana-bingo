import Link from "next/link";
import Head from "next/head";

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
  console.log(plants);
  return (
    <>
      <Head>
        <title>The Game</title>
      </Head>
      <h1>Game Page</h1>
      <Link href="/tracker">
        <a>Add Plants</a>
      </Link>
      <Link href="/">
        <a>I am done</a>
      </Link>
    </>
  );
}
