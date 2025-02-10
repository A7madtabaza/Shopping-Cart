import { configureStore } from "@reduxjs/toolkit";
import product from "../features/cart/product"
import cartReducer from '../features/cart/cartlist'
export const store = configureStore({
  reducer: {
    products: product,
    cart:cartReducer
  },
});