import { Route, Routes } from 'react-router-dom';
import Home from '../views/Home';
import Store from '../views/Store';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import SideBar from '../components/SideBar';
import { CartProvider } from '../context/CartContext';
import './app.css';

function App() {
  return (
    <div className="App">
      <main>
        <CartProvider>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/store" element={<Store />} />
          </Routes>
        </CartProvider>
        <Footer />
      </main>
      <aside>
        <SideBar />
      </aside>
    </div>
  );
}

export default App;
