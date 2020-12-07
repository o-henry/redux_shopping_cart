import React from "react";

import { Button } from "components";

function AddProduct({ onClick }: any) {
  return (
    <>
      <Button onClick={onClick}>ADD TO CART</Button>
    </>
  );
}

export default React.memo(AddProduct);
