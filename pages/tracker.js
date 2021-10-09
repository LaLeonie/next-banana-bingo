import Link from "next/link";

export default function Tracker() {
  return (
    <>
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
