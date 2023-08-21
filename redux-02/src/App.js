import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './components/About';
import Hero from './components/Hero';
import Cart from './components/Cart';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' Component={Hero}/>
        <Route path='/about' Component={About}/>
        <Route path='/cart' Component={Cart}/>

      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
