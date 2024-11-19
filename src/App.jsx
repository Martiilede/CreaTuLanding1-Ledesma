import './App.css'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'
import Navbar from './components/navbar/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NotFound from './components/Notfound'
import QuienesSomos from './components/QuienesSomos'
import Cart from './components/Cart/Cart'
import {CartProvider} from './components/cartContext/CartContext'
import Checkout from './components/Checkout/Checkout'
import { Footer } from './components/footer/Footer'

function App() {
  return (
    <div>
      <BrowserRouter>
      <CartProvider>
      <Navbar/>
      <Routes>
       <Route path='/' element={<ItemListContainer mensaje="Bienvenidos a La Pizzeria" mensaje2="Hechas con Amor y Dulzura"/>}/>
       <Route path='/category/:idCategory' element={<ItemListContainer/>}/>
       <Route path="/quienes-somos" element={<QuienesSomos/>}/>
       <Route path='*' element={<NotFound/>}/>
       <Route path='/cart' element={<Cart/>}/>
       <Route path='/finalizando-compra' element={<Checkout/>}/>
      </Routes>
<Footer/>
      </CartProvider>
      </BrowserRouter>
    </div>
    
  )
}
export default App
