import formatCurrency from '../utilities/CurrencyFormatter';

interface ItemCardProps {
  id: number;
  name: string;
  price: number;
  img: string;
}

function ItemCard({ id, name, price, img, items, setter }: any) {
  const quantity = 0; // Hardcoded
  const handleAdd = () => {
    setter([
      ...items,
      {
        name,
        id,
      },
    ]);
    console.log(items);
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
