import React,{ useState } from 'react'

const UseState = () => {
  
//   here we create a state
    const [counter, setCounter] = useState(0) // 0 will be initial value set in the sate of counter and when we want to update it we going to use the setCounter Method 

// making method to increase by1 
    const increase = () => {
        setCounter(counter+1)
        // console.log(counter)
    }

// making method to descrease by1 
    const descrease = () => {
        setCounter(counter-1)
        // console.log(counter)
    }
  
    return (
        <>
         <div>
            <h1 style={{textAlign:'center'}}>{counter}</h1>
         <button onClick={increase} style={{marginRight: '10px'}}>Increment</button>
         <button onClick={descrease}>Decrement</button>    
         </div>
        </>
  )
}

export default UseState