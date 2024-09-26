import './App.css'
import { ItemListContainer } from './components/Navbar/ItemListContainer'
import Navbar from './components/navbar/Navbar'

function App() {
  return (
    <div>
      <Navbar />
      <ItemListContainer mensaje="Bienvenidos a La Pizzeria"/>
    </div>
    
  )
}
export default App
