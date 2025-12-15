import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: localStorage.getItem("cart")
      ? JSON.parse(localStorage.getItem("cart"))
      : [],
    totalQuantity: localStorage.getItem("cart")
      ? JSON.parse(localStorage.getItem("cart")).length
      : 0,
  },
  reducers: {
    addToCart: (state, action) => {
      // ❓ find() kya return karta hai?
      // 👉 ARRAY ke andar ka actual object,
      const existing = state.items.find(
        (item) => item.id === action.payload.id
      );

      if (existing) {
        existing.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }

      localStorage.setItem("cart", JSON.stringify(state.items));
    },
    clearCart: (state) => {
      state.items = [];
      state.totalQuantity = 0;
      localStorage.removeItem("cart");
    },
    removeItem: (state, action) => {
      const cardData = state.items.filter(
        (item) => item.id != action.payload.id
      );
      state.items = cardData;
      localStorage.setItem("cart", JSON.stringify(cardData));
    },



    increaseQty: (state, action) => {
      const item = state.items.find((i) => i.id === action.payload);
      if (item) item.quantity += 1;
      
      localStorage.setItem("cart", JSON.stringify(state.items));
    },
    decreaseQty: (state, action) => {
      const item = state.items.find((i) => i.id === action.payload);
      if (item && item.quantity > 1) item.quantity -= 1;

      localStorage.setItem("cart", JSON.stringify(state.items));
    },
  },
});

export const { addToCart, clearCart, removeItem, increaseQty, decreaseQty } = cartSlice.actions;
export default cartSlice.reducer;
