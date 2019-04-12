import Link from "next/link";
const Navbar = () => (
  <ul>
    <Link href="/">
      <a>Home | </a>
    </Link>
    <Link href="/about">
      <a> About Page</a>
    </Link>
  </ul>
);

export default Navbar;
