import React from 'react'
import { useState, useEffect } from 'react';


const UseEffectTopic = () => {
  const [counter, setCounter] = useState(0)

  // as soon as the counter button clicked and value change , we take note of this change and using useEffect we change the title of the page
  useEffect(() => {
      // console.log(document.title={counter})  this is wrong way here we passsing whole object 

      // {counter} creates a new object literal. It does not extract the value of counter but instead wraps it in an object.

      console.log(document.title=`${counter}`) // Set the document title based on the counter value
      
      // ${counter} evaluates to the string value of the counter variable and dynamically includes it in a string.

      // The assignment works correctly because the resulting value is a string (e.g., if counter is 5, it becomes "5").

  }, [counter])  // Dependency array includes counter
  
  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={()=>setCounter(counter+1)}>counter</button>
      <p>incremental counter for useEffect practice</p>
    </div>
  )
}

export default UseEffectTopic;