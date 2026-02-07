import { CARD_ADD_ITEM, CARD_REMOVE_ITEM } from "./actionTypes";

export default function cartReducer(state = [], action) {
  switch (action.type) {
    case CARD_ADD_ITEM:
      return [...state, action.payload];

    case CARD_REMOVE_ITEM:
      return state.filter(
        item => item.productId !== action.payload.productId
      );

    default:
      return state;
  }
}
