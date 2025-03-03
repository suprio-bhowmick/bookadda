import { configureStore } from "@reduxjs/toolkit";
import bookSlice from "./bookSlice";
import cartSlice from "./cartSlice";
import authSlice from "./authSlice";
import orderSlice from "./orderSlice";
const store = configureStore({
  reducer: {
    books: bookSlice,
    cart: cartSlice,
    auth: authSlice,
    order: orderSlice,
  },
});
export default store;
