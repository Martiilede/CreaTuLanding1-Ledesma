import { CartContext } from "../cartContext/CartContext"
import { useContext } from "react"
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import "./Cart.css"

const Cart = () => {

    const { cart, Preciototal, BorrarProducto, VaciarCarrito } = useContext(CartContext)

  return (
    <div>{
        cart.map((productsCart)=> (
          <div key={productsCart.id} style={{display : "flex", justifyContent: "space-around"}}>
            <img width={300} src={productsCart.imagen} alt="" />
            <h2>{productsCart.nombre}</h2>
            <p>Cantidad : {productsCart.cantidad}</p>
            <p>Precio individual ${productsCart.precio}</p>
            <p>Precio Parcial :{productsCart.cantidad * productsCart.precio}</p>
            <button  onClick={() => BorrarProducto(productsCart.id)} style={{width: 30 , height: 30, background: "red", borderRadius: 30, cursor: "pointer"}}>{<MdDelete/>}</button>
          </div>
        ))
        }
        <h2>
            {cart.length === 0 ? (
                <div></div>
            ) : (
                <p style={{margin: "10px"}}>Precio Final : {Preciototal()}</p>
            )}</h2>
        
        <h3>
        {cart.length === 0 ? (
            <div style={{textAlign: "center", color : "red"}}>
              <h1 style={{marginBottom: 20}}>Su Carrito esta Vacio</h1>
            <img src="./src/assets/102661.png" alt="" />
            </div>
        ) : (
            <div>
                    <button onClick={VaciarCarrito} className="vaciar-carrito">Vaciar Carrito</button> <br />
                   <div className="contenedor-boton">
                   <Link to="/finalizando-compra" className="finalizar-compra">Finalizar Compra</Link>
                   </div>
                </div>
            )}
            </h3>
    </div>
  )
}

export default Cart