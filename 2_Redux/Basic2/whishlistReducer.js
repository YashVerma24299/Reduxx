function wishlistReducer(state = [], action) {
  switch (action.type) {
    case WISHLIST_ADD_ITEM: {
      const exists = state.some(
        item => item.productId === action.payload.productId
      );
      if (exists) return state;

      return [...state, action.payload];
    }

    case WISHLIST_REMOVE_ITEM:
      return state.filter(
        item => item.productId !== action.payload.productId
      );

    default:
      return state;
  }
}
