import React, { createContext, useState } from 'react';

const CartContext = createContext()

const CartProvider = ({children}) => {
  const [cart, setCart] = useState([])

  const addProductsInCart = (newProducts) => {
    const tempcart = [...cart]
    const indexproduct = cart.findIndex((productsCart)=> productsCart.id === newProducts.id)

if(indexproduct >= 0){
tempcart[indexproduct].cantidad = tempcart[indexproduct].cantidad + newProducts.cantidad
setCart(tempcart)

}else{
  setCart([...cart, newProducts])
}

  }

const BorrarProducto = (idProduct) => {
  let productosFiltrados = cart.filter ( (productsCart) => productsCart.id !== idProduct )
  setCart(productosFiltrados)
}
const VaciarCarrito = () => {
  setCart([])
}

const TotalCantidad = () =>{
  const cantidad = cart.reduce((total, productsCart)=> total + productsCart.cantidad, 0 )
  return cantidad
}
const Preciototal = () => {
let total = cart.reduce ((total, productsCart)=> total + (productsCart.cantidad * productsCart.precio), 0 )
return total
}
return (
  <CartContext.Provider value={{cart, addProductsInCart, TotalCantidad, Preciototal, BorrarProducto, VaciarCarrito}}>
{children}
  </CartContext.Provider>
)

}
export { CartContext, CartProvider };