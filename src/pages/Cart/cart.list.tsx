import React from "react";

import { Item, Button } from "components";

interface Props {
  id: string;
  thumbnailUrl: string | undefined;
}

function CartList({ carts, onClick }: any) {
  return (
    <>
      {carts &&
        carts.map((cart: Props) => (
          <Item>
            <img src={cart.thumbnailUrl} />
            <Button onClick={() => onClick(cart.id)}>DELETE CART</Button>
          </Item>
        ))}
    </>
  );
}

export default CartList;
