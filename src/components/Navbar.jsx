import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <Link to="/articles">Articles</Link>
      <a>Users</a>
      <a>Profile</a>
      <Link to="/">Home</Link>
    </nav>
  );
}
