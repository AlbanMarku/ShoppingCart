import { Route, Routes } from 'react-router-dom';
import Home from '../views/Home';
import Store from '../views/Store';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { CartProvider } from '../context/CartContext';
import { UserProvider } from '../context/UserContext';
import './app.css';

function App() {
  return (
    <div className="App">
      <main>
        <UserProvider>
          <CartProvider>
            <NavBar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/store" element={<Store />} />
            </Routes>
          </CartProvider>
        </UserProvider>
        <Footer />
      </main>
    </div>
  );
}

export default App;
