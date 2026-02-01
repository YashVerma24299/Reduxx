// const { createStore } = Redux;

// let initialState = {
//   products: ProductList,
//   cardItems: [],
//   wishList: [],
// };

// const CARD_ADD_ITEM = "card/addItem";
// const CARD_REMOVE_ITEM = "card/removeItem";
// const WISHLIST_ADD_ITEM = "wishlist/addItem";
// const WISHLIST_REMOVE_ITEM = "wishlist/removeItem";

// function reducer(state = initialState, action) {
//   switch (action.type) {
//     case CARD_ADD_ITEM:
//       return { ...state, cardItems: [...state.cardItems, action.payload] };
//     case CARD_REMOVE_ITEM:
//       return {
//         ...state,
//         cardItems: state.cardItems.filter(
//           (item) => item.productId != action.payload.productId,
//         ),
//       };
//     case WISHLIST_ADD_ITEM: {
//       const existsInWishlist = state.wishList.some(
//         (item) => item.productId === action.payload.productId,
//       );
//       // prevent duplicates
//       if (existsInWishlist) {
//         return state;
//       }
//       return {
//         ...state,
//         wishList: [...state.wishList, action.payload],
//       };
//     }

//     case WISHLIST_REMOVE_ITEM: {
//       return {
//         ...state,
//         wishList: state.wishList.filter(
//           (item) => item.productId !== action.payload.productId,
//         ),
//       };
//     }
//     default:
//       return state;
//   }
// }

// const store = createStore(reducer);
// console.log(store);
// store.subscribe(() => {
//   console.log("STATE 👉", store.getState());
// });

// // CART
// store.dispatch({ type: CARD_ADD_ITEM, payload: { productId: 1, quantity: 1 } });
// store.dispatch({ type: CARD_ADD_ITEM, payload: { productId: 11, quantity: 1 } });
// store.dispatch({ type: CARD_ADD_ITEM, payload: { productId: 15, quantity: 2 } }); 
// store.dispatch({ type: CARD_REMOVE_ITEM, payload: { productId: 11 } });

// // WISHLIST
// store.dispatch({ type: WISHLIST_ADD_ITEM, payload: { productId: 5 } });
// store.dispatch({ type: WISHLIST_ADD_ITEM, payload: { productId: 5 } }); // ignored
// store.dispatch({ type: WISHLIST_ADD_ITEM, payload: { productId: 9 } });
// store.dispatch({ type: WISHLIST_REMOVE_ITEM, payload: { productId: 5 } });




const { createStore, combineReducers } = Redux;

const rootReducer = combineReducers({
  products: productsReducer,
  cardItems: cartReducer,
  wishList: wishlistReducer
});


const store = createStore(rootReducer);
store.subscribe(() => {
  console.log("STATE 👉", store.getState());
});

// CART
store.dispatch({ type: CARD_ADD_ITEM, payload: { productId: 1, quantity: 1 } });
store.dispatch({ type: CARD_ADD_ITEM, payload: { productId: 11, quantity: 1 } });
store.dispatch({ type: CARD_ADD_ITEM, payload: { productId: 15, quantity: 2 } }); 
store.dispatch({ type: CARD_REMOVE_ITEM, payload: { productId: 11 } });

// WISHLIST
store.dispatch({ type: WISHLIST_ADD_ITEM, payload: { productId: 5 } });
store.dispatch({ type: WISHLIST_ADD_ITEM, payload: { productId: 5 } }); // ignored
store.dispatch({ type: WISHLIST_ADD_ITEM, payload: { productId: 9 } });
store.dispatch({ type: WISHLIST_REMOVE_ITEM, payload: { productId: 5 } });

