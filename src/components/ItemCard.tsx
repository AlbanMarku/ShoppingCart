import formatCurrency from '../utilities/CurrencyFormatter';
import { useCartItemsContext } from '../context/CartContext';

type ItemCardProps = {
  id: number;
  name: string;
  price: number;
  img: string;
};

function ItemCard({ id, name, price, img }: ItemCardProps) {
  const quantity = 0; // Hardcoded
  const { cartItems, setCartItems } = useCartItemsContext();
  const handleAdd = () => {
    if (cartItems.length > 0) {
      setCartItems([
        ...cartItems,
        {
          name,
          price,
          id,
        },
      ]);
    } else {
      setCartItems([
        {
          name,
          price,
          id,
        },
      ]);
    }
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
        {quantity === 0 ? (
          <button onClick={handleAdd} type="button">
            Add to cart
          </button>
        ) : (
          <>
            <button type="button">Less</button>
            <p>Amount goes here</p>
            <button type="button">More</button>
            <button type="button">Remove</button>
          </>
        )}
      </div>
    </div>
  );
}

export default ItemCard;
