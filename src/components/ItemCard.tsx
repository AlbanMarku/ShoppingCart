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
  const { getItemQuantity, addItem, decreaseItem } = useCartContext();
  const amount = getItemQuantity(id);

  const handleAdd = () => {
    addItem(id);
  };
  const handleSub = () => {
    decreaseItem(id);
  };

  return (
    <div className="ItemCard">
      <div className="infoArea">
        <h2>{name}</h2>
        <h3>{formatCurrency(price)}</h3>
        <img src={img} alt="product" />
      </div>
      <div className="buttonArea">
        {amount === 0 ? (
          <button onClick={handleAdd} type="button">
            Add to cart
          </button>
        ) : (
          <>
            <button onClick={handleSub} type="button">
              -
            </button>
            <p>{amount}</p>
            <button onClick={handleAdd} type="button">
              +
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default ItemCard;
