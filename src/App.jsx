import './App.css'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'
import Navbar from './components/navbar/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NotFound from './components/Notfound'
import QuienesSomos from './components/QuienesSomos'


function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
       <Route path='/' element={<ItemListContainer mensaje="Bienvenidos a La Pizzeria" mensaje2="Hechas con Amor y Dulzura"/>}/>
       <Route path='/category/:idCategory' element={<ItemListContainer/>}/>
       <Route path="/quienes-somos" element={<QuienesSomos/>}/>
       <Route path='*' element={<NotFound/>}/>
      </Routes>
      </BrowserRouter>
    </div>
    
  )
}
export default App
