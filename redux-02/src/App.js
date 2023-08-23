import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Hero from './components/Hero';
import Cart from './components/Cart';
import PaymentSuccess from './components/PaymentSuccess';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' Component={Hero}/>
        <Route path='/cart' Component={Cart}/>
        <Route path='/success' Component={PaymentSuccess}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
