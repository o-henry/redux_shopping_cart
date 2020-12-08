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

// reducer
const reducers = {
  ADD: (
    { cart }: CartList,
    { payload: { thumbnailUrl, selected } }: PayloadAction<IProduct>
  ) => {
    const cartProduct: IProduct = {
      id: nanoid(),
      thumbnailUrl: thumbnailUrl,
      selected
    };

    cart.push(cartProduct);
  },

  REMOVE: (
    { cart }: CartList,
    { payload: { id } }: PayloadAction<IProduct>
  ) => {
    const target = cart.findIndex((item: IProduct) => item.id === id);
    cart.splice(target, 1);
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
