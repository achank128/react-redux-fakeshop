export const allProductsSelector = (state) => state.productSlice.allProducts;
export const selectedProductSelector = (state) =>
  state.productSlice.selectedProduct;

export const cartSelector = (state) => state.cartSlice.cart;
export const amountSelector = (state) => state.cartSlice.amount;
export const totalSelector = (state) => state.cartSlice.total;
