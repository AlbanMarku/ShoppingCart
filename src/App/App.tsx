import { Route, Routes } from 'react-router-dom';
import Home from '../views/Home';
import Store from '../views/Store';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/store" element={<Store />} />
      </Routes>
    </div>
  );
}

export default App;
