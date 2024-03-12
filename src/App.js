import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Navbar3 from './Components/Navbar/Navbar3';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Comprar from './Pages/Comprar';
import Categoria from './Pages/Categoria';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import Login from './Pages/Login';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar3 />
        <Routes>
          <Route path='/' element={<Comprar/>}/>
          <Route path='/comprar' element={<Categoria category="comprar"/>}/>
          <Route path='/contactanos' element={<Categoria category="contactanos"/>}/>
          <Route path='/blog' element={<Categoria category="blog"/>}/>
          <Route path='/sobrenosotros' element={<Categoria category="sobrenosotros"/>}/>
          <Route path="product" element={<Product/>}>
            <Route path=':productId' element={<Product/>}/>
          </Route>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/login' element={<Login/>}/>
        </Routes>


      </BrowserRouter>
    </div>
  );
}

export default App;
