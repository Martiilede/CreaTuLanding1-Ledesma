import { useState, useEffect } from "react";
import ItemDetailContainer from "./itemDetailContainer/itemDetailContainer.jsx";
import { useParams } from "react-router-dom";
import db from "../../db/db.js";
import { getDocs, collection, query , where } from "firebase/firestore";

export const Item = () => {
  const [productList, setProductList] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setModalOpen] = useState(false);
  const {idCategory} = useParams()

  const getProducts = () => {
    const getProductsRef = collection (db, "products")
    getDocs(getProductsRef)
    .then((datadb)=> {
      const data = datadb.docs.map ((productdb)=>{
       return { id: productdb.id, ...productdb.data()}
      })
      setProductList(data)
    })
  }

  const getProductsbyCategory = () => {
    const getProductsRef = collection (db, "products")
    const filtrar = query( getProductsRef, where("category" , "==", idCategory))
    getDocs(filtrar)
    .then((datadb)=> {
      const data = datadb.docs.map ((productdb)=>{
       return { id: productdb.id, ...productdb.data()}
      })
      setProductList(data)
    })
  }

  useEffect(() => {
   if (idCategory){
    getProductsbyCategory()
   }else {
    getProducts()
   }
  }, [idCategory]);

  const handleViewDetails = (product) => {
    setSelectedProduct(product);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedProduct(null);
  };

  return (
    <>
        {productList.map(product => (
          <section className="pizzas" key={product.id} id={product.id}>
            <article>
              <h2>{product.nombre}</h2>
              <img src={product.imagen} alt={product.nombre} />
              <h6 style={{ fontSize: "20px" }}>Precio ${product.precio}</h6>
              <button className="agregar-carrito" onClick={() => handleViewDetails(product)}>
                Ver Detalles
              </button>
            </article>
          </section>
        ))
      }
      <ItemDetailContainer isOpen={isModalOpen} onClose={closeModal} product={selectedProduct} />
    </>
  );
};