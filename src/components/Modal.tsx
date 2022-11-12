import { createPortal } from 'react-dom';
import { useCartContext } from '../context/CartContext';
import currencyFormatter from '../utilities/CurrencyFormatter';
import storeItems from '../data/items.json';
import '../styles/modal.css';

function Modal() {
  const {
    openModal,
    toggleModal,
    cartItems,
    deleteItem,
    decreaseItem,
    addItem,
  } = useCartContext();

  if (!openModal) return null;
  const modalRoot = document.getElementById('modalSection') as HTMLFormElement;
  return createPortal(
    <>
      <div className="overlay" />
      <div className="modalBackground">
        <div className="modalContainer">
          <div className="title">
            <button type="button">x</button>

            <h2>Cart items</h2>
          </div>
          <div className="body">
            <table>
              <thead>
                <tr>
                  <th>Logo</th>
                  <th>Product</th>
                  <th>Quantity</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => {
                  const foundItem = storeItems.find(
                    (storeItem) => storeItem.id === item.id
                  );
                  if (foundItem) {
                    return (
                      <tr key={item.id}>
                        <td>
                          <img src={foundItem.imageLink} alt="Product" />
                        </td>
                        <td>{foundItem.name}</td>
                        <td>{item.quantity}</td>
                        <td>
                          {currencyFormatter(foundItem.price * item.quantity)}
                        </td>
                        <td>
                          <button
                            onClick={() => {
                              decreaseItem(item.id);
                            }}
                            id="cartQuantityButton"
                            type="button"
                          >
                            -
                          </button>
                        </td>
                        <td>
                          <button
                            onClick={() => {
                              addItem(item.id);
                            }}
                            id="cartQuantityButton"
                            type="button"
                          >
                            +
                          </button>
                        </td>
                        <td>
                          <button
                            onClick={() => {
                              deleteItem(item.id);
                            }}
                            id="cartQuantityButton"
                            type="button"
                          >
                            x
                          </button>
                        </td>
                      </tr>
                    );
                  }
                  return (
                    <p key={item.id}>Something messed up here pls debug.</p>
                  );
                })}
              </tbody>
            </table>
          </div>
          <div className="footer">
            <button onClick={toggleModal} type="button">
              Close
            </button>
            <button type="button">Checkout</button>
          </div>
        </div>
      </div>
    </>,
    modalRoot
  );
}

export default Modal;
