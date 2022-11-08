import { Route, Routes } from 'react-router-dom';
import { useState, useMemo } from 'react';
import Home from '../views/Home';
import Store from '../views/Store';
import NavBar from '../components/NavBar';
import { CartItemsContext } from '../context/CartContext';
import type { CartItem } from '../context/CartContext';
import './App.css';

function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const contextValue = useMemo(
    () => ({
      cartItems,
      setCartItems,
    }),
    [cartItems]
  );

  return (
    <CartItemsContext.Provider value={contextValue}>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
        </Routes>
      </div>
    </CartItemsContext.Provider>
  );
}

export default App;
