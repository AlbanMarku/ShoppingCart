import { Link } from 'react-router-dom';

function NavBar({ items }: any) {
  return (
    <div className="NavBar">
      <h2>I am nav</h2>
      <nav>
        <ul className="navLinks">
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/store">
            <li>Store</li>
          </Link>
        </ul>
        <p>{items.name}</p>
      </nav>
    </div>
  );
}

export default NavBar;
