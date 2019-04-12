import Link from "next/link";

const Navbar = () => (
  <div>
    <ul>
      <Link href="/">
        <a>Home | </a>
      </Link>
      <Link href="/about">
        <a> About Page</a>
      </Link>
    </ul>
  </div>
);

export default Navbar;
