import React, { useState } from "react";

import { Product, Cart } from "pages";

function App() {
  const [isComplete, setIsComplete] = useState(false);

  return (
    <>
      <button onClick={() => setIsComplete(!isComplete)}>CART</button>

      {isComplete ? <Cart /> : <Product />}
    </>
  );
}

export default App;
