import { HashRouter, Route, Routes } from 'react-router-dom';
import Home from '../Views/Home';
import './App.css';

export function App() {
  return (
    <div className="App">
      <h1>hello</h1>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export function WrappedApp() {
  return (
    <HashRouter>
      <App />
    </HashRouter>
  );
}
