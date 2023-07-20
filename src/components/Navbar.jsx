import { Link } from "react-router-dom";

export default function Navbar({ currentTopic }) {
  return (
    <nav>
      <Link to={`/articles/topics/${currentTopic}`}>Articles</Link>
      <a>Users</a>
      <a>Profile</a>
    </nav>
  );
}
