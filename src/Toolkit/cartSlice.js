import { createSlice } from "@reduxjs/toolkit";

const initialValue = {
  cart: localStorage.getItem("bookAddaCart")
    ? JSON.parse(localStorage.getItem("bookAddaCart"))
    : [],
  isLoading: false,
  error: null,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialValue,
  reducers: {
    addToCart: (state, { payload }) => {
      const existingBook = state.cart.find((book) => book.id === payload.id);

      if (existingBook) {
        existingBook.quantity += 1; // Increase quantity if book exists
      } else {
        state.cart.push({
          id: payload.id,
          title: payload.title,
          author: payload.author,
          price: payload.price,
          thumbnail: payload.thumbnail,
          quantity: 1,
        });
      }

      localStorage.setItem("bookAddaCart", JSON.stringify(state.cart));
    },

    removeFromCart: (state, { payload }) => {
      state.cart = state.cart.filter((book) => book.id !== payload.id);
      localStorage.setItem("bookAddaCart", JSON.stringify(state.cart));
    },
    updateCart: (state, { payload }) => {
      const existingBook = state.cart.find((book) => book.id === payload.id);

      if (payload.type === "INC") {
        existingBook.quantity += 1;
      } else {
        existingBook.quantity -= 1;
      }
      localStorage.setItem("bookAddaCart", JSON.stringify(state.cart));
    },
    clearCart: (state, { payload }) => {
      state.cart = [];
      localStorage.removeItem("bookAddaCart");
    },
  },
});

export const { addToCart, removeFromCart, updateCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
