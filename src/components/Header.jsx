import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header id="header">
      <Link to="/">
        <h1>NC News</h1>
      </Link>
    </header>
  );
}
