import Link from "next/link";

export default function Home() {
  return (
    <div className="container mx-auto">
      <nav className="flex justify-between text-center py-5 p-3 bg-blue-800 text-white shadow-sm antialiased	">
        <h1 className="font-bold 4xl uppercase">
          Division<span className="text-blue-300">siriraj</span>
        </h1>
        <ul className="flex space-x-4">
          <li>
            <Link href="/posts/first-post">
              <a>ข่าวสาร</a>
            </Link>
          </li>
          <li>
            <Link href="/posts/first-post">
              <a>การบริการ</a>
            </Link>
          </li>
          <li>
            <Link href="/posts/first-post">
              <a>เกี่ยวกับเรา</a>
            </Link>
          </li>
          <li>
            <Link href="/posts/first-post">
              <a>ติดต่อเรา</a>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
