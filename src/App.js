import NavBar from './NavBar/NavBar'
import Home from './Components/Home/Home'
import Stocks from './Components/Stocks/Stocks'
import Quotes from './Components/Stocks/Quotes/Quotes'
import NotFound from './Components/NotFound/NotFound'

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/stocks" element={<Stocks />} />
          <Route path="/quotes/:id" element={<Quotes />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
