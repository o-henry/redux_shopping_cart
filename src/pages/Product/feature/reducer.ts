import {
  createSlice,
  PayloadAction,
  createAction,
  createSelector,
  nanoid
} from "@reduxjs/toolkit";

import { IProduct, CartList } from "./type";

// action
const actionPrefix = "cart";
const addToCart = createAction<object>(`${actionPrefix}/ADD`);
const removeToCart = createAction<object>(`${actionPrefix}/REMOVE`);

export const actions = {
  addToCart,
  removeToCart
};

const initialState: CartList = {
  cart: []
};

const reducers = {
  ADD: (
    { cart }: CartList,
    { payload: { name, selected } }: PayloadAction<IProduct>
  ) => {
    const cartProduct: IProduct = {
      id: nanoid(),
      name: name.toString(),
      selected
    };

    cart.push(cartProduct);
  }
};

export const cartSlice = createSlice({
  name: actionPrefix,
  initialState,
  reducers
});

export const selectCartList = createSelector(
  (state: CartList) => state.cart,
  (cart: IProduct[]) => cart
);
