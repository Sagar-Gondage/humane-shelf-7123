import {
  ADD_ITEM_TO_CART_SUCCESS,
  LOAD_CART_ITEMS,
} from "../constants/reducer.constants.js/cart.constants";

export const addItemToCart = (payload) => (dispatch) => {
  // console.log("add item to cart payload", payload);
  localStorage.setItem("cartItems", JSON.stringify(payload));
  dispatch({ type: ADD_ITEM_TO_CART_SUCCESS, payload: payload });
};

export const updateCartCount = (payload) => (dispatch) => {
  // console.log("updated cart", payload);
  localStorage.setItem("cartItems", JSON.stringify(payload));
  dispatch({ type: ADD_ITEM_TO_CART_SUCCESS, payload: payload });
};

// export const updateCartItems = (payload) => (dispatch) => {
//   // dispatch(updateCartItemLoading(payload));

//   setTimeout(() => {
//     console.log("fetch details...");
//     let cartItems = JSON.parse(localStorage.getItem("cartItem")) || [];
//     if (cartItems.length > 0) {
//       let updated = cartItems.filter((item) => {
//         if (item._id === payload.cartId) {
//           item.count = payload.newCount;
//         }
//         return item;
//       });

//       updated = updated.sort((a, b) => {
//         if (a.createdAt > b.createdAt) return 1;
//         if (a.createdAt < b.createdAt) return -1;
//       });
//       localStorage.setItem("cartItem", JSON.stringify(updated));
//       dispatch(updateCartItemSuccess(updated));
//       dispatch(getCartItemAPI());
//     }
//   }, 200);
// };
