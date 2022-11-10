import { Link } from 'react-router-dom';
import { useCartContext } from '../context/CartContext';
import CurrencyFormatter from '../utilities/CurrencyFormatter';

function NavBar() {
  const { cartItems, totalCartAmount } = useCartContext();
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
      </nav>
    </div>
  );
}

export default NavBar;
