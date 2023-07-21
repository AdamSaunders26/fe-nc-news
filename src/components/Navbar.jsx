import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <nav>
      <Link to={`/articles/topics/all?sortby=created_at&order=desc`}>
        <h2>Articles</h2>
      </Link>
      <a>
        <h2>Users</h2>
      </a>
      <a>
        <h2>Profile</h2>
      </a>
    </nav>
  );
}
