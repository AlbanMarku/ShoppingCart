import storeItems from '../data/items.json';
import ItemCard from '../components/ItemCard';

function Store() {
  return (
    <div className="Store">
      <h1>I am store</h1>
      {storeItems.map((item) => (
        <ItemCard
          key={item.id}
          id={item.id}
          name={item.name}
          price={item.price}
          img={item.imageLink}
        />
      ))}
    </div>
  );
}

export default Store;