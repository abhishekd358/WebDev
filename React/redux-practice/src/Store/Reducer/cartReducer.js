// here we separate the reducer function by the section/ or category
// like if we have only the cart reducer function or action run here

export const ADD_ITEMS_IN_CART = "cart/addItem";
export const REMOVE_ITEMS_FROM_CART = "cart/removeItem";
export const UPDATE_ITEMS_IN_CART = "cart/updateCart";
export const INCREASE_ITEM_QUANTITY = "cart/increaseItemQuantity";
export const DECREASE_ITEM_QUANTITY = "cart/decreaseItemQuantity";


// Action Creators
export function addCartItem(productData) {
  return { type: ADD_ITEMS_IN_CART, payload: productData }
}

export function removeCartItem(productId) {
  return { type: REMOVE_ITEMS_FROM_CART, payload: productId}
}

export function decreaseCartItemQuantity(productId) {
  return {
    type: DECREASE_ITEM_QUANTITY,
    payload: { productId },
  }
}

export function increaseCartItemQuantity(productId) {
  return {
    type: INCREASE_ITEM_QUANTITY,
    payload: {productId}, //{productId: 12}
  }
}




export default function cartReducer(state = [], action) {
  switch (action.type) {
    case ADD_ITEMS_IN_CART:{
      const existingItem = state.find(
        (cartItem) => cartItem.productId === action.payload.productId
      )
      if (existingItem) {
        return state.map((cartItem) => {
          if (cartItem.productId === existingItem.productId) {
            return { ...cartItem, quantity: cartItem.quantity + 1 }
          }
          return cartItem
        })
      }
      return [...state, { ...action.payload, quantity: 1 }]
    }
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
