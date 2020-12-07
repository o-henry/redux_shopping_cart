import React from "react";

function Item({ children }: any) {
  return (
    <>
      <div>Product</div>
      <div>{children}</div>
    </>
  );
}

export default Item;
