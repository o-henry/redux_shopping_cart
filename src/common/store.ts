import { combineReducers } from "@reduxjs/toolkit";

import { cartSlice } from "pages";

export const rootReducer = combineReducers({
  cart: cartSlice.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;
