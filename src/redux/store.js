import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./reducers/cartSlice";
import productSlice from "./reducers/productSlice";

const store = configureStore({
  reducer: {
    productSlice: productSlice.reducer,
    cartSlice: cartSlice.reducer,
  },
});

export default store;
