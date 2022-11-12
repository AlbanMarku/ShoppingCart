import { useCartContext } from '../context/CartContext';
import formatCurrency from '../utilities/CurrencyFormatter';
import '../styles/itemCard.css';

type ItemCardProps = {
  id: number;
  name: string;
  price: number;
  img: string;
};

function ItemCard({ id, name, price, img }: ItemCardProps) {
  const { getItemQuantity, addItem, decreaseItem, deleteItem } =
    useCartContext();
  const amount = getItemQuantity(id);

  const handleAdd = () => {
    addItem(id);
  };
  const handleSub = () => {
    decreaseItem(id);
  };
  const handleDel = () => {
    deleteItem(id);
  };

  return (
    <div className="ItemCard">
      <div className="infoArea">
        <h2>{name}</h2>
        <img src={img} alt="product" />
        <h3>{formatCurrency(price)}</h3>
      </div>
      <div className="buttonArea">
        {amount === 0 ? (
          <button id="addToCart" onClick={handleAdd} type="button">
            Add to cart
          </button>
        ) : (
          <div className="editArea1">
            <div className="editArea2">
              <button
                className="quantityButton"
                onClick={handleSub}
                type="button"
              >
                -
              </button>
              <p>{amount}</p>
              <button
                className="quantityButton"
                onClick={handleAdd}
                type="button"
              >
                +
              </button>
            </div>
            <button id="deleteButton" onClick={handleDel} type="button">
              del
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default ItemCard;
