import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import bookSlice from "./bookSlice";

const store = configureStore({
  reducer:{
    cart: cartSlice,
    books: bookSlice,
  }
})

export default store;