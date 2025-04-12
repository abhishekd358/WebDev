import React from 'react'

// if we wnat to use the context here we have to first
// import the mycontext file 
import MyContext from './MyContext'

// import usecontext hook
import { useContext } from 'react'



const People = () => {
    // here i give long name you can also give short name as well like 'data'
    const contextDataThatWeReceive = useContext(MyContext)

    console.log(contextDataThatWeReceive)
  return (
    <div>
        <h1>People</h1>
        <h1>Money: {contextDataThatWeReceive.money}</h1>
        <h1>counterValue:{contextDataThatWeReceive.counter}</h1>

        {/* we using the context data i.e counter to change from here to the context present in another file */}

        
        <button onClick={()=>contextDataThatWeReceive.setCounter(contextDataThatWeReceive.counter+1)}>CounterChanging Directly in Context file</button>
    </div>
  )
}

export default People