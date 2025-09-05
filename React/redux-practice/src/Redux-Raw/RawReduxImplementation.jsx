import { createStore } from "redux";
import { productsList } from "./Product.js";


// first we create a initial states
const initialState = {
    product: productsList,
    cartItems:[],
    wishlist:[]
};

//second: here we have to decalre our function inside the reducer ; which function handle which kind of action type
console.log("initial state",initialState);
function reducer(state = initialState, action){
        switch(action.type){
                case "cart/addItem":
                    return {...state, cartItems:[...state.cartItems, action.payload]};
                case "cart/removeItem":
                    return {...state, cartItems: state.cartItems.filter((item)=>item.productId !==action.payload.productId)}
                default:
                  return state
                }
              }

    
// third: we create a store  and pass a reducer
const myStore = createStore(reducer)


// fourth: here we dispacth a action to the reducer
myStore.dispatch({type: 'cart/addItem', payload: {productId: 1,quantity:1 }})
console.log("updated", myStore.getState())


setTimeout(() => {
    myStore.dispatch({type: 'cart/removeItem', payload: {productId: 1}})
    console.log("settimeotut")
    console.log("updated", myStore.getState())
}, 2000);


import React from 'react'

const RawReduxImplementation = () => {
  return (
    <div>
      <h1> CartItems: {initialState.cartItems}</h1>
    </div>
  )
}

export default RawReduxImplementation