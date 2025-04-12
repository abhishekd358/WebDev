//  first we have to import the createContext method reference variable 

// in this file we store data that we wnat to use in the children
import MyContext from './MyContext';

import React, { useState } from 'react'
    

// here we have to pass props
const MoneyState = (props) => {
    const money = 10000;
    // also we can pass the useState
    const [counter, setCounter] = useState(0)
    console.log('MoneyState File Counter Value:',counter)
    // here we passing the data that we wnat to use in the children
  return (
    <MyContext.Provider value={{ money,counter,setCounter  }}>{props.children}</MyContext.Provider>
  )
}

export default MoneyState;