import storeItems from '../data/items.json';
import ItemCard from '../components/ItemCard';
import '../styles/store.css';

function Store() {
  return (
    <div className="Store">
      <h1>I am store</h1>
      <div className="content">
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
    </div>
  );
}

export default Store;
