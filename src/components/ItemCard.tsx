import { useCartContext } from '../context/CartContext';
import formatCurrency from '../utilities/CurrencyFormatter';

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
        <h3>{formatCurrency(price)}</h3>
        <img src={img} alt="product" />
        <p>{id}</p>
      </div>
      {/* Sort styling for separate conditions */}
      <div className="buttonArea">
        {amount === 0 ? (
          <button onClick={handleAdd} type="button">
            Add to cart
          </button>
        ) : (
          <>
            <button type="button">Less</button>
            <p>Amount goes here</p>
            <button onClick={handleAdd} type="button">
              More
            </button>
            <button onClick={handleSub} type="button">
              Remove
            </button>
            <button onClick={handleDel} type="button">
              del
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default ItemCard;
