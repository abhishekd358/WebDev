import React from 'react'
import useCounterStore from './store/counterStore'
const App = () => {
  // console.log("APP LOGS",useCounterStore());
  const {count , countIncrement, countDecrement} = useCounterStore()
  // console.log(("COUNT",count));
  // console.log(("COUNT METHOD",countIncrement));
  
  return (
   
       <div>
      <h2>Count: {count}</h2>
      <button onClick={countIncrement}>+</button>
      <button onClick={countDecrement}>-</button>
    </div>
  )
}

export default App