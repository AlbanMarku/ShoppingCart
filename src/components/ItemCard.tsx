interface ItemCardProps {
  id: number;
  name: string;
  price: number;
  img: string;
}

function ItemCard({ id, name, price, img }: ItemCardProps) {
  return (
    <div className="ItemCard">
      <h2>{name}</h2>
      <h3>{price}</h3>
      <img src={img} alt="product" />
      <p>{id}</p>
    </div>
  );
}

export default ItemCard;
