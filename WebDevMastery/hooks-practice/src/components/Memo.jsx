import React, { useMemo } from 'react'
import {products} from '../assets/products'
import { useState } from 'react'

const Memo = () => {
    // first we create a state to of discount on change of discount value it change the total price
    const [discount, setDiscount] = useState(72)

    // here we use totalPrice calulation which we use reduce method for that , without useMemo , our component re-render when we change the discount
    const totalPriceHandler = useMemo(
            () => products.reduce((totalP, item) => totalP + item.price, 0),
            [products]
        );

    const discountHandler = useMemo(() => totalPriceHandler -(totalPriceHandler * discount /100) , [totalPriceHandler, discount])





  return (
    <div>
        <h1>useMemo for complex calcaultion value or remembering value:</h1>
        <p>used for memozing high calaculation value</p>
        <p>here we use products Array/DB to calculte total price. in our project we show totalPrice when we change the dicount value .</p> 
            
        <p>here we use totalPrice calulation  for that  we use reduce method, without useMemo , our component re-render when we change the discount. for that sake to avoid re-render of componenet we use <b>useMemo Hook</b> </p>

        <h3>Enter Discount: <input type="number" onChange={(e) => setDiscount(Number(e.target.value))}  value={discount} style={{width:'200px'}}/> </h3>


        <h3>Total Price: Rs.{totalPriceHandler.toFixed(2)}</h3>
      <h3>Discounted Price: Rs.{discountHandler.toFixed(2)}</h3>


    
    </div>
  )
}

export default Memo