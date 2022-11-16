import { Link } from 'react-router-dom';
import { useCartContext } from '../context/CartContext';
import { useUserContext } from '../context/UserContext';
import Modal from './Modal';
import CartLogo from '../../public/imgs/cart.png';
import '../styles/navBar.css';

function NavBar() {
  const { totalCartAmount, toggleModal } = useCartContext();
  const { googleSignIn, googleSignOut, user } = useUserContext();

  const handleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };

  const handleSignOut = async () => {
    try {
      await googleSignOut();
    } catch (error) {
      console.log(error);
    }
  };

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
        {user.name ? (
          <div className="signOutArea">
            <p>Welcome {user.name}</p>
            <button onClick={handleSignOut} type="button">
              Sign out
            </button>
          </div>
        ) : (
          <button onClick={handleSignIn} type="button">
            Sign in
          </button>
        )}
        <button
          onClick={() => {
            toggleModal();
          }}
          type="button"
        >
          <img src={CartLogo} alt="cart" />
          <div>
            <p id="cartAmount">{totalCartAmount()}</p>
          </div>
        </button>
      </div>
      <Modal />
    </div>
  );
}

export default NavBar;
