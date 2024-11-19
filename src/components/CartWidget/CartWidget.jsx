import carrito from "../../assets/carrito-de-compras.png"
import "./CartWidget.css"
import { CartContext } from "../cartContext/CartContext"
import { useContext } from "react"
import { Link } from "react-router-dom"

const CartWidget = () => {
  const {TotalCantidad} = useContext(CartContext)

  const Total = TotalCantidad()
  return (
    <div className="carrito">
        <p>{Total >= 1 ? Total : ""}</p>
      <Link to="/cart"><img src={carrito} alt="Carrito de Compras" /></Link>
    </div>
  )
}

export default CartWidget