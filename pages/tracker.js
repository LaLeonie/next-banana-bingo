import Link from "next/link";
import Head from "next/head";

export default function Tracker() {
  return (
    <>
      <Head>
        <title>Plant Tracker</title>
      </Head>
      <h1>Tracker Page</h1>
      <Link href="/dashboard">
        <a>Dashboard</a>
      </Link>
      <Link href="/">
        <a>I am done</a>
      </Link>
    </>
  );
}
