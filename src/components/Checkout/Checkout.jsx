import { useState, useContext } from "react"
import { CartContext } from "../cartContext/CartContext"
import { Timestamp, collection, addDoc } from "firebase/firestore"
import db from "../../db/db.js"
import "./Checkout.css"

const Checkout = () => {
    const { cart, Preciototal } = useContext(CartContext)
    const [IdOrder, setIdOrder] = useState(null)
    const [dataform, Setdataform] = useState({
        fullname: "",
        phone: "",
        email: ""
    })
    const handleChangeinput = (event) => (

        Setdataform({ ...dataform, [event.target.name]: event.target.value })
    )

    let handleSubmitform = (event) => {
        event.preventDefault()
        const order = {
            buyer: { ...dataform },
            products: [...cart],
            date: Timestamp.fromDate(new Date()),
            price: Preciototal()
        }
        uploadOrder(order)
    }
    const uploadOrder = (NewOrder) => {
        const orderRef = collection(db, "orders")
        addDoc(orderRef, NewOrder)
            .then((response) => {
                setIdOrder(response.id)
            })
    }
    return (
        <div className="contact-container">
            {
                IdOrder === null ? (
                        <div className="contact">
                        <form onSubmit={handleSubmitform}>
                        <h1>Finalizando Compra</h1>
                        <input type="text" name="fullname" value={dataform.fullname} onChange={handleChangeinput} placeholder="Nombre" required/>
                        <input type="number" name="phone" value={dataform.phone} onChange={handleChangeinput} placeholder="Numero de Telefono" required/>
                        <input type="email" name="email" value={dataform.email} onChange={handleChangeinput} placeholder="Email" required />
                        <button type="submit">Terminar Compra</button>
                        </form>
                        </div>

                ) : (
                    <div>
                        <h1>Muchas Gracias por su compra</h1>
                        <h3>Su número de Seguimiento: {IdOrder}</h3>
                    </div>
                )
            }
        </div>
    )
}
export default Checkout