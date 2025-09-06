import { combineReducers, createStore } from "redux";

import cartReducer, { ADD_ITEMS_IN_CART, addCartItem, decreaseCartItemQuantity, INCREASE_ITEM_QUANTITY, increaseCartItemQuantity, REMOVE_ITEMS_FROM_CART } from "./Reducer/cartReducer.js";
import productReducer from "./Reducer/productReducer.js";
import wishlistReducer, { addWishListItem, removeWishListItem, WISHLIST_ADD_ITEM, WISHLIST_REMOVE_ITEM } from "./Reducer/wishlistReducer.js";


// first we create a initial states
// const initialState = {    // as we create the external reducer function so we directly pass 
//     product: productsList,
//     cartItems:[],
//     wishlist:[]
// };

// //second: here we have to decalre our function inside the reducer ; which function handle which kind of action type
// // console.log("initial state",initialState);
// function reducer(state = initialState, action){
//         switch(action.type){
//                 case "cart/addItem":
//                     return {...state, cartItems:[...state.cartItems, action.payload]};
//                 case "cart/removeItem":
//                     return {...state, cartItems: state.cartItems.filter((item)=>item.productId !==action.payload.productId)}
//                 default:
//                   return state
//                 }
//               }






// here we create a combine reducer to call reducer individual functions
const reducer = combineReducers({
    products: productReducer,
    cartItems: cartReducer,
    wishlistItems: wishlistReducer

})



    
// third: we create a store  and pass a reducer
export const myStore = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())


// // fourth: here we dispacth a action to the reducer
// myStore.dispatch({type: ADD_ITEMS_IN_CART, payload: {productId: 1,quantity:1 }})
// // console.log("updated", myStore.getState())
// myStore.dispatch({type: REMOVE_ITEMS_FROM_CART, payload: {productId: 1}})
// myStore.dispatch({type: INCREASE_ITEM_QUANTITY, payload: {productId: 1}})



// // wishlist

// myStore.dispatch({ type: WISHLIST_ADD_ITEM, payload: { productId: 18 } })
// myStore.dispatch({ type: WISHLIST_ADD_ITEM, payload: { productId: 11 } })
// myStore.dispatch({ type: WISHLIST_REMOVE_ITEM, payload: { productId: 11 } })
// myStore.dispatch({ type: WISHLIST_REMOVE_ITEM, payload: { productId: 18 } })
// console.log(myStore.getState())














console.log(myStore)
// console.log("initial",myStore.getState())

// myStore.dispatch(addCartItem(1))
// myStore.dispatch(addCartItem(5))

// myStore.dispatch(increaseCartItemQuantity(12))

// myStore.dispatch(decreaseCartItemQuantity(12))
// myStore.dispatch(decreaseCartItemQuantity(12))

// myStore.dispatch(addWishListItem(18))
// myStore.dispatch(addWishListItem(11))

// myStore.dispatch(removeWishListItem(11))
// myStore.dispatch(removeWishListItem(18))
console.log("states",myStore.getState())