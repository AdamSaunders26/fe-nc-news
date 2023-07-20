import { Link } from "react-router-dom";

export default function Navbar({ currentTopic }) {
  return (
    <nav >
      <Link to="/articles"><h2>Articles</h2></Link>
      <a><h2>Users</h2></a>
      <a><h2>Profile</h2></a>
      
    </nav>
  );
}
