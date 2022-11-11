import { Link } from 'react-router-dom';
import { useCartContext } from '../context/CartContext';
import CurrencyFormatter from '../utilities/CurrencyFormatter';
import CartLogo from '../../public/imgs/cart.png';
import '../styles/navBar.css';

function NavBar() {
  const { totalCartAmount } = useCartContext();
  return (
    <div className="NavBar">
      <h2>Store name</h2>
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
      <div className="cartIcon">
        <button type="button">
          <img src={CartLogo} alt="cart" />
          <div>
            <p id="cartAmount">{totalCartAmount()}</p>
          </div>
        </button>
      </div>
    </div>
  );
}

export default NavBar;
