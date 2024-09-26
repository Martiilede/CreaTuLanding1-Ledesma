import carrito from "../../assets/carrito-de-compras.png"
import "./CartWidget.css"

const CartWidget = () => {
  return (
    <div className="carrito">
        0
        <img src={carrito} alt="Carrito de Compras" />
    </div>
  )
}

export default CartWidget