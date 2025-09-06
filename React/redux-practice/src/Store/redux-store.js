import { combineReducers, createStore } from "redux";

import cartReducer, { ADD_ITEMS_IN_CART, INCREASE_ITEM_QUANTITY, REMOVE_ITEMS_FROM_CART } from "./Reducer/cartReducer.js";
import productReducer from "./Reducer/productReducer.js";
import wishlistReducer, { WISHLIST_ADD_ITEM, WISHLIST_REMOVE_ITEM } from "./Reducer/wishlistReducer.js";


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
    wishilist: wishlistReducer

})



    
// third: we create a store  and pass a reducer
const myStore = createStore(reducer)


// fourth: here we dispacth a action to the reducer
myStore.dispatch({type: ADD_ITEMS_IN_CART, payload: {productId: 1,quantity:1 }})
// console.log("updated", myStore.getState())
myStore.dispatch({type: REMOVE_ITEMS_FROM_CART, payload: {productId: 1}})
myStore.dispatch({type: INCREASE_ITEM_QUANTITY, payload: {productId: 1}})



// wishlist

myStore.dispatch({ type: WISHLIST_ADD_ITEM, payload: { productId: 18 } })
myStore.dispatch({ type: WISHLIST_ADD_ITEM, payload: { productId: 11 } })
myStore.dispatch({ type: WISHLIST_REMOVE_ITEM, payload: { productId: 11 } })
myStore.dispatch({ type: WISHLIST_REMOVE_ITEM, payload: { productId: 18 } })
console.log(myStore.getState())