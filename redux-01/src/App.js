import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Page1 from './components/Page1';
import Page2 from './components/Page2';
import Page3 from './components/Page3';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" Component={Page1}/>
        <Route path="/page2" Component={Page2}/>
        <Route path="/page3" Component={Page3}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
