import Link from "next/link";
import Head from "next/head";

export default function Game() {
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
