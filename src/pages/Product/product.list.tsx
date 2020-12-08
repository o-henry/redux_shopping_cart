import React from "react";

import { Item, Button } from "components";

interface Props {
  id: string;
  thumbnailUrl: string | undefined;
}

function ProductList({ products, onClick }: any) {
  return (
    <>
      {products &&
        products.map((product: Props) => (
          <Item key={product.id}>
            <img src={product.thumbnailUrl} />
            <Button onClick={() => onClick(product.thumbnailUrl)}>
              ADD TO CART
            </Button>
          </Item>
        ))}
    </>
  );
}

export default ProductList;
