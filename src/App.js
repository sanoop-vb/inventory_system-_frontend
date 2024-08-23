import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import CreateProduct from './Components/CreateProduct';
import ProductList from './Components/ProductList';
import StockManagement from './Components/StockManagement';




function App() {
  return (
    <Router>
    <div className="App">
      <Navbar/>
      <div className="content">
                    <Routes>
                        <Route path="/create-product" element={<CreateProduct />} />
                        <Route path="/product-list" element={<ProductList />} />
                        <Route path="/stock-management" element={<StockManagement />} />
                    </Routes>
                </div>
    </div>
    </Router>
  );
}

export default App;
