import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import CartList from "./cart.list";
import { IProduct } from "pages";
import { RootState } from "common/store";
import { actions } from "pages";

function Cart() {
  const dispatch = useDispatch();
  const handleClick = useCallback(
    id => {
      dispatch(
        actions.removeToCart({
          id: id,
          selected: false
        })
      );
    },
    [dispatch]
  );

  const carts = useSelector<RootState, IProduct[]>(state => {
    const lists = state.cart.cart;
    return lists.filter((ele: { selected: any }) => ele.selected);
  });

  return (
    <>
      <CartList carts={carts} onClick={handleClick} />
    </>
  );
}

export default Cart;
