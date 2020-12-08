import React, { useState } from "react";
import styled from "styled-components";

import { Product, Cart } from "pages";

const Main = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

function App() {
  const [isComplete, setIsComplete] = useState(false);

  return (
    <>
      <button onClick={() => setIsComplete(!isComplete)}>CART</button>
      <Main>{isComplete ? <Cart /> : <Product />}</Main>
    </>
  );
}

export default App;
