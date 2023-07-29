import { Link } from "react-router-dom";
export default function Navbar({ currentUser }) {
  const { avatar_url, username } = currentUser;

  return (
    <nav>
      <Link to={`/articles/topics/all?sortby=created_at&order=desc`}>
        <h2>Articles</h2>
      </Link>
      <Link to={`/users`}>
        <h2>Users</h2>
      </Link>
      <a>
        <h2>Profile</h2>
        <img src={avatar_url} />
      </a>
    </nav>
  );
}
