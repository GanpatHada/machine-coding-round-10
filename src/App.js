import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Home from './pages/home/Home';
import {Routes,Route} from 'react-router-dom'
import Products from './pages/products/Products';
import Departments from './pages/departments/Departments';
import ProductDetails from './pages/product-details/ProductDetails';
import AddProduct from './pages/add-product/AddProduct';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <main>
        <Routes>
            <Route exact path='/' element={<Home/>}/>
            <Route exact path='/products' element={<Products/>}/>
            <Route exact path='/products/:productId' element={<ProductDetails/>}/>
            <Route exact path='/departments' element={<Departments/>}/>
            <Route exact path='/addProduct' element={<AddProduct/>}/>
        </Routes>
      </main>
    </div>
  );
}

export default App;
