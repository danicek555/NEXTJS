import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1>tedka jsem na user</h1>
      <Link href="/user/new">new user</Link>
      <Link href="/user/1">user 1</Link>
      <Link href="/user/2">user 2</Link>
      <Link href="/user/3">user 3</Link>
    </div>
  );
}
