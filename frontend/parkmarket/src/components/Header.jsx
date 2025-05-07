import { Link } from 'react-router-dom';
import "../styles/Header.css";
export default function Header() {
  return (
    <header className="header">
      <Link to="/">
        <h1>Logo</h1>
      </Link>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </nav>
      <div className="search-bar">
        <input type="text" placeholder="Search..." />
        <button>Search</button>
      </div>
      <div className="cart-icon">
        <Link to="/cart">Cart</Link>
      </div>
      <div className="user-info">
        <p>User: John Doe</p>
        <button>Logout</button>
      </div>
    </header>
  )
}
