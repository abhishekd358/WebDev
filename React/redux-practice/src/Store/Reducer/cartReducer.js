// here we separate the reducer function by the section/ or category
// like if we have only the cart reducer function or action run here

export const ADD_ITEMS_IN_CART = "cart/addItem";
export const REMOVE_ITEMS_FROM_CART = "cart/removeItem";
export const UPDATE_ITEMS_IN_CART = "cart/updateCart";
export const INCREASE_ITEM_QUANTITY = "cart/increaseItemQuantity";
export const DECREASE_ITEM_QUANTITY = "cart/decreaseItemQuantity";

export default function cartReducer(state = [], action) {
  switch (action.type) {
    case ADD_ITEMS_IN_CART:
      return [...state, action.payload];
    case REMOVE_ITEMS_FROM_CART:
      return state.filter(
        (item) => item.productId !== action.payload.productId
      );
    case INCREASE_ITEM_QUANTITY:
      return state.map((cartItem) => {
        if (cartItem.productId == action.payload.productId) {
          return { ...cartItem, quantity: cartItem.quantity + 1 };
        }
        return cartItem;
      });

    case DECREASE_ITEM_QUANTITY:
      return state
        .map((cartItem) => {
          if (cartItem.productId === action.payload.productId) {
            return { ...cartItem, quantity: cartItem.quantity - 1 };
          }
          return cartItem;
        })
        .filter((cartItem) => cartItem.quantity > 0);
    default:
      return state;
  }
}
