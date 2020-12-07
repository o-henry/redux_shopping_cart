import React from "react";

import { Item } from "components";

interface Props {
  id: string;
  thumbnailUrl: string | undefined;
}

function CartList({ carts }: any) {
  console.log("carts", carts);
  return (
    <>
      {carts &&
        carts.map((cart: Props) => (
          <Item>
            <img src={cart.thumbnailUrl} />
          </Item>
        ))}
    </>
  );
}

export default CartList;
