import Link from "next/link";

export default function Game() {
  return (
    <>
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
