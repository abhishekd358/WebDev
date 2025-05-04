import React, { useReducer } from 'react'


// reducer

const CounterReducer = (state, action) =>{ //here we passing one action on that basis we swith to cases
  switch(action.type){
    case 'INCREMENT':
      return { count: state.count + 1 }
    case 'DECREMENT':
      return {count : state.count - 1}
    default:
      return state;
  }

}



const Counter = () => {
  const [state, dispatch] = useReducer(CounterReducer, {count : 0})

  return (
    <div>
      <h1>counter value : {state.count}</h1>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>+</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>-</button>

    </div>
  )
}



// here we exporting the COunter method not Counter Reducer
export default Counter;