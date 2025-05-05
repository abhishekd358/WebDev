import React,{useReducer} from 'react'


const CounterReducer = (state, action) =>{
  switch (action.type) {
    case 'INCREMENT':
      return ({count : state.count+1});

    case 'DECREMENT':
      return ({count : state.count-1});
  
    default:
      return state;
  }

}



const Counter = () => {
  const [state, dispatch] = useReducer(CounterReducer, {count: 0})
  return (
    <div>
      <h1>counter : {state.count}</h1>
      <button onClick = {()=>dispatch({type: 'INCREMENT'})}>Increment</button>
      <button onClick = {()=>dispatch({type: 'DECREMENT'})}>Decrement</button>

    </div>
  )
}

export default Counter;