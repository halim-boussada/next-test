import Link from "next/link";

export default function Home() {
  return (
    <div>
       <h1>hellow world</h1>
       <Link href="/about">go to about page</Link>
    </div>
  );
}
