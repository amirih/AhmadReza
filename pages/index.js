import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Pages:</h1>
      <Link href="/scrollImage"> Scroll to Change Images</Link>
    </div>
  );
}
