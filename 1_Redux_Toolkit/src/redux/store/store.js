import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../slice/counter/counterSlice'
import productsReducer from '../slice/product/productSlice'
import cartReducer from '../slice/cart/cartSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    products: productsReducer,
    cart: cartReducer
  }, 
})