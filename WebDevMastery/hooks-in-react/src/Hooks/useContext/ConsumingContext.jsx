import React from 'react'

// 4th stage: here we after all using the data that availale in the MoneyState. we can use any component of our react app.

// for that we import 
import MoneyContext from './MoneyContext'
// as well as we import 
import { useContext } from 'react'


// in this file we going to use the context 
const ConsumingContext = () => {

    // const data = useContext(MoneyContext);

     // aslo we can destructure the data here directly so we dont require to use the . (dot method) for the extraction
     const {moneyForPeople} = useContext(MoneyContext);

    // here in useContext we have to pass the created context i.e MoneyContext
    // console.log(useContext(MoneyContext)) 

  return (
    // <div>ConsumingContext {data.moneyForPeople}</div>
    <div>ConsumingContext {moneyForPeople}</div>



  )
}

export default ConsumingContext