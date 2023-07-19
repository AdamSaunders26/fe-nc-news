import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav >
      <Link to="/articles/topics/all">Articles</Link>
      <a>Users</a>
      <a>Profile</a>
    </nav>
  );
}
