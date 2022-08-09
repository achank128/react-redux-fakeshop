import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
    total: 0,
    amount: 0,
  },
  reducers: {
    addToCart: (state, action) => {
      const isItemInCart = state.cart.find(
        (item) => item.id === action.payload.item.id
      );

      //Add to cart
      if (isItemInCart) {
        let newCart = state.cart.map((item) =>
          item.id === action.payload.item.id
            ? { ...item, quantity: item.quantity + action.payload.quantity }
            : item
        );
        state.cart = newCart;
      } else {
        state.cart.push({
          ...action.payload.item,
          quantity: action.payload.quantity,
        });
      }

      //update Amount,Total
      let { total, amount } = state.cart.reduce(
        ({ amount, total }, item) => {
          const { quantity, price } = item;
          amount += quantity;
          total += quantity * price;
          return { amount, total };
        },
        { total: 0, amount: 0 }
      );
      state.amount = amount;
      state.total = total;
    },
    increase: (state, action) => {
      const cartItem = state.cart.find((item) => item.id === action.payload);
      cartItem.quantity += 1;

      //update Amount,Total
      let { total, amount } = state.cart.reduce(
        ({ amount, total }, item) => {
          const { quantity, price } = item;
          amount += quantity;
          total += quantity * price;
          return { amount, total };
        },
        { total: 0, amount: 0 }
      );
      state.amount = amount;
      state.total = total;
    },
    decrease: (state, action) => {
      const cartItem = state.cart.find((item) => item.id === action.payload);
      if (cartItem.quantity === 1)
        state.cart = state.cart.filter((item) => {
          return item.id !== action.payload;
        });
      else cartItem.quantity -= 1;

      //update Amount,Total
      let { total, amount } = state.cart.reduce(
        ({ amount, total }, item) => {
          const { quantity, price } = item;
          amount += quantity;
          total += quantity * price;
          return { amount, total };
        },
        { total: 0, amount: 0 }
      );
      state.amount = amount;
      state.total = total;
    },
  },
});
export default cartSlice;
