import React, { useState, useEffect } from "react";
import MiComponente from "../buttons.jsx";
import loadingImage from "../../../assets/cargando-loading-048.gif"
import { useContext} from "react";
import { CartContext } from "../../cartContext/CartContext.jsx";


const ItemDetailContainer = ({ isOpen, onClose, product }) => {
  const [loading, setLoading] = useState(true);
 const {addProductsInCart} = useContext(CartContext)

  const Addproducts = (cantidad) => {
const productsCart = {...product, cantidad: cantidad}
  addProductsInCart(productsCart)
  }

  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        setLoading(false);
      }, 2000); 

      return () => clearTimeout(timer);
    } else {
      setLoading(true);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>Cerrar</button>
        {loading ? (
          <img src={loadingImage} alt="Cargando..." />
        ) : (
          <>
            <h2>{product.nombre}</h2>
            <img src={product.imagen} alt={product.nombre} />
            <p>{product.parrafo}</p>
            <h6 style={{ fontSize: 20 }}>{product.category === "empanadas" ? `Precio Docena $${product.precio}` : `Precio $${product.precio}`}</h6>
            <MiComponente  Addproducts = {Addproducts}/>
          </>
        )}
      </div>
    </div>
  );
};

export default ItemDetailContainer;