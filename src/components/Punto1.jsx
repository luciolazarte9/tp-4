import { useState } from "react";

const Punto1 = () => {
    const [count, setCount] = useState(0)

    return (
      <>
        <h1>{count}</h1>
        <div className="card">
          <button onClick={() => setCount((count) => count - 1)}>
            Decrementar
          </button>
          <button onClick={() => setCount((count) => count + 1)}>
            Incrementar
          </button>
      
        </div>
      </>
    )
}

export default Punto1;