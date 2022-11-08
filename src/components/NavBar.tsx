import { Link } from 'react-router-dom';
import { useCartItemsContext } from '../context/CartContext';
import CurrencyFormatter from '../utilities/CurrencyFormatter';

function NavBar() {
  const { cartItems } = useCartItemsContext();
  let total = 0;

  cartItems.forEach((element) => {
    total += element.price;
  });
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
        <p>{CurrencyFormatter(total)}</p>
      </nav>
    </div>
  );
}

export default NavBar;
