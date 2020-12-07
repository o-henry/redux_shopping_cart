import React from "react";

import { Item } from "components";

interface Props {
  id: string;
  thumbnailUrl: string | undefined;
}

function ProductList({ products, children }: any) {
  return (
    <>
      {products &&
        products.map((product: Props) => (
          <Item>
            <img src={product.thumbnailUrl} />
            {children}
          </Item>
        ))}
    </>
  );
}

export default ProductList;
