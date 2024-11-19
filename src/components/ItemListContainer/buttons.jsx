import { useState } from "react";

const MiComponente = ({Addproducts}) => {
  const [cantidad, setCantidad] = useState(1);

  const incrementar = () => setCantidad(cantidad + 1);
  const decrementar = () => setCantidad(cantidad - 1);

  return (
    <>
    <div className="buttons">
      <button onClick={decrementar} disabled={cantidad === 0}>-</button>
      <p>{cantidad}</p>
      <button onClick={incrementar}>+</button>
    </div>
      <button onClick={() => Addproducts(cantidad)} className="agregar-carrito">Agregar al Carrito</button>
    </>
  );
};
export default MiComponente

