import React,{useState} from 'react'


const CounterReducer = (state, action) =>{
  switch (action.type) {
    case 'INCREMENT':
      return ({count : state.count+1});

    case 'DECREMENT':
      return ({count : state.count-1});
  
    default:
      return({count: state.count})
  }

}



const Counter = () => {
  const [count, setCount] = useState(0)
  return (
    <div>Counter</div>
  )
}

export default Counter