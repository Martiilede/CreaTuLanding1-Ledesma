import { products } from "../../data/products"
import Itemlist from "./Itemlist"
import "./itemlistContainer.css"

export const ItemListContainer = ({mensaje, mensaje2}) => {

  return (
         <div>
          <h1 style={{textAlign: "center"}}>{mensaje}</h1>
          <h2 style={{textAlign: "center"}}>{mensaje2}</h2> 
          <Itemlist/>
         </div>
  )
}
