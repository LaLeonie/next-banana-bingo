import Link from "next/link";
import Head from "next/head";

export default function Tracker() {
  return (
    <>
      <Head>
        <title>Plant Tracker</title>
      </Head>
      <div className="main-content">
        <h2>Tracker Page</h2>
      </div>
      <div className="main-footer">
        <Link href="/" passHref>
          <button className="button--primary">I am done</button>
        </Link>
      </div>
    </>
  );
}
