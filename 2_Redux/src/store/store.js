import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./productsReducer.js";
import cartReducer from "./cardReducer.js";
import wishlistReducer from "./whishlistReducer.js";

const store = configureStore({
  reducer: {
    products: productsReducer,
    cartItems: cartReducer,
    wishList: wishlistReducer
  }
});


export default store;
