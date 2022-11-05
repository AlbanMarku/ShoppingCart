import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import Home from '../views/Home';
import Store from '../views/Store';
import NavBar from '../components/NavBar';
import './App.css';

type Cart = {
  id: number;
};

function App() {
  const [cartItems, setCartItems] = useState<Cart[]>([]);
  return (
    <div className="App">
      <NavBar items={cartItems} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/store"
          element={<Store items={cartItems} setter={setCartItems} />}
        />
      </Routes>
    </div>
  );
}

export default App;
