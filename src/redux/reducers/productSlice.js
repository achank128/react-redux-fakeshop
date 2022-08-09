import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "product",
  initialState: {
    allProducts: [],
    selectedProduct: {},
  },
  reducers: {
    setProducts: (state, action) => {
      state.allProducts = action.payload;
    },
    setSelectedProduct: (state, action) => {
      state.selectedProduct = action.payload;
    },
    removeSelectedProduct: (state, action) => {
      state.selectedProduct = {};
    },
  },
});

export default productSlice;
