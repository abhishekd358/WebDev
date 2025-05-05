// basically we creating a cart functionality
// cart has a items with specific properties
// we create totalPricing Method to calculate value of items
// we create a discount property 
// so basically, when so every we change a discount when we click on button , the method of totalPricing embedded in the Cart Function without using in dom or anywhere it rerenders automatically to avoid this we use the useMemo() Hook 


import React, { useState, useMemo } from 'react'

// moved item array outside the Cart function to prevent it from re-initializing on each render
const item = [
    {id: 1, name: 'Laptop', price: 80000},
    {id: 2, name: 'Mobile', price: 58000},
    {id: 3, name: 'Mouse', price: 4000},
]

const Cart = () => {

    // here we creating a discount state so when a user click on the button 10% discount add automatically and overall discount shown
    const [discount, setDiscount] = useState(0)

    // here we creating the totalPricing calculating method which re-renders everytime when we click on the Add Discount button


//   -----------------------this below code is for without useMemo() HOOK----------------
    // const totalPricing = () => {
    //     item.reduce((total, currentValue)=>{
    //         console.log('Here Calculating totalPrice which re-renders')
    //         return total + currentValue.price
    //     }, 0)
    // }
    // totalPricing();


//   -----------------------this below code is with useMemo() HOOK----------------
    // we bind above code into useMemo
    const totalPricing = useMemo(() => {
        console.log('Here Calculating totalPrice which Not re-renders')
        const x = item.reduce((total, currentValue)=> total + currentValue.price, 0)
        console.log(x)
        return x
    }, [])  // empty dependency array since item is constant and outside

  return (
    <div>
        {item.map((i)=>( 
            <div key={i.id}>
                <h5>Product Name: {i.name} </h5>
                <p>Price: {i.price}</p>
            </div>
        ))}
        <h3>Hurrry!!! Your Discount = {discount}%</h3>
        {/* below totalPricing code only work when you use useMemo Hook */}
        <h3>Total Price = Rs.{totalPricing}</h3>      

        <button onClick={ 
            ()=>{console.log('Discount button CLicked')
                setDiscount(discount+10)}}>Add Discount 10%</button>
    </div>
  )
}

export default Cart
