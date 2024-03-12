import './App.css';
import Navbar from './Components/Navbar/Navbar';
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
        <Navbar />
        <Routes>
          <Route path='/' element={<Comprar/>}/>
          <Route path='/primavera' element={<Categoria category="primavera"/>}/>
          <Route path='/verano' element={<Categoria category="verano"/>}/>
          <Route path='/invierno' element={<Categoria category="invierno"/>}/>
          <Route path='/otoño' element={<Categoria category="otoño"/>}/>
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
