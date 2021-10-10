import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <>
      <Head>
        <title>Banana Bingo</title>
        <meta name="description" content="Plant tracking game for kids" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Banana Bingo</h1>

        <Link href="/game" passHref>
          <button>Let's Play</button>
        </Link>
      </main>
    </>
  );
}
