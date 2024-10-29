import { useState } from "react";

const MiComponente = () => {
  const [cantidad, setCantidad] = useState(1);

  const incrementar = () => setCantidad(cantidad + 1);
  const decrementar = () => setCantidad(cantidad - 1);

  return (
    <div className="buttons">
      <button onClick={decrementar} disabled={cantidad === 0}>-</button>
      <p>{cantidad}</p>
      <button onClick={incrementar}>+</button>
    </div>
  );
};
export default MiComponente

