import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Navbar3 from './Components/Navbar/Navbar3';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Comprar from './Pages/Comprar';
import Categoria from './Pages/Categoria';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import Login from './Pages/Login';
import Inicio from './Pages/Inicio';
import Contactanos from './Pages/Contactanos';
import Blog from './Pages/Blog';
import SobreNosotros from './Pages/SobreNosotros';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar3 />
        <Routes>
          <Route path='/' element={<Inicio/>}/>
          <Route path='/comprar' element={<Comprar/>}/>
          <Route path='/contactanos' element={<Contactanos/>}/>
          <Route path='/blog' element={<Blog/>}/>
          <Route path='/sobrenosotros' element={<SobreNosotros/>}/>
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
