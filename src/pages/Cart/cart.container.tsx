import React from "react";
import { useSelector } from "react-redux";

import CartList from "./cart.list";
import { IProduct } from "pages";
import { RootState } from "common/store";

function Cart() {
  const carts = useSelector<RootState, IProduct[]>(state => {
    const lists = state.cart.cart;
    return lists.filter((ele: { selected: any }) => ele.selected);
  });

  return (
    <>
      <CartList carts={carts} />
    </>
  );
}

export default Cart;
