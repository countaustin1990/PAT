import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Products from './pages/Products/Products.pro';
import ProductsD from './pages/Productsd/ProductsD';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';



const App = () => {
  return (
    <Router>
      <div className='bg-red-500'>
     
       <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products-details" element={<ProductsD />} />
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
};

export default App;
