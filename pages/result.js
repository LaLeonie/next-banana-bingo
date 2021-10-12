import Link from "next/link";
import Head from "next/head";

export default function Result() {
  return (
    <>
      <Head>
        <title>Result</title>
      </Head>
      <div className="main-content">
        <h2>Result</h2>
      </div>

      <div className="main-footer main-footer-centered">
        <div className="button-container">
          <Link href="/tracker" passHref>
            <button className="button--primary">Yes, I had more</button>
          </Link>
          <Link href="/" passHref>
            <button>No, that is all I had</button>
          </Link>
        </div>
      </div>
    </>
  );
}
