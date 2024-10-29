import { useState, useEffect } from "react";
import { products } from "../../data/products.js";
import ItemDetailContainer from "./itemDetailContainer/itemDetailContainer.jsx";
import { useParams } from "react-router-dom";

export const Item = () => {
  const [productList, setProductList] = useState([]);
  const [allProducts, setAllProducts] = useState(products);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setModalOpen] = useState(false);
  const {idCategory} = useParams()

  useEffect(() => {
    setTimeout(() => {
      if(idCategory){
        const productsfiltrados = allProducts.filter((products) => products.category === idCategory)
        setProductList(productsfiltrados)
      }else{
        setProductList(allProducts)
      }
      ;;
    }, 1000);     
  }, [idCategory, allProducts]);

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