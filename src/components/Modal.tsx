import { createPortal } from 'react-dom';
import { useCartContext } from '../context/CartContext';
import storeItems from '../data/items.json';
import '../styles/modal.css';

function Modal() {
  const { openModal, toggleModal, cartItems } = useCartContext();
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
                  <th>sec1</th>
                  <th>sec1</th>
                  <th>sec1</th>
                </tr>
              </thead>
            </table>
            <tbody>
              {cartItems.map((item) => {
                const foundItem = storeItems.find(
                  (storeItem) => storeItem.id === item.id
                );
                if (foundItem) {
                  return (
                    <tr key={item.id}>
                      <td>{foundItem.name}</td>
                      <td>{foundItem.price}</td>
                    </tr>
                  );
                }
                return <p key={item.id}>Something messed up here pls debug.</p>;
              })}
            </tbody>
          </div>
          <div className="footer">
            <button type="button">Checkout</button>
            <button
              onClick={() => {
                toggleModal();
              }}
              type="button"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </>,
    modalRoot
  );
}

export default Modal;
