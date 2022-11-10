import { Route, Routes } from 'react-router-dom';
import { useState, useMemo } from 'react';
import Home from '../views/Home';
import Store from '../views/Store';
import NavBar from '../components/NavBar';
import { CartProvider } from '../context/CartContext';
import './App.css';

function App() {
  return (
    <CartProvider>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
        </Routes>
      </div>
    </CartProvider>
  );
}

export default App;
