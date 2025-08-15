import React, { useState, useTransition } from 'react'
import {products} from '../assets/products'

const Transition = () => {
    // for to filter if anything parameter(it can be product name,category,stock value ) enter user we return available item from array
    // for that we have to create following state
    const [search_value, setSearch_Value] = useState('') //taking search value from the input
    const [filteredItem, setFilteredItem] = useState(products) // to show filtered item from the product array or DB on our search_value


    const [isPending, startTransition]= useTransition()

    // here we add logic to loop through item and filter item from product array
    const onChangeHandler = (e)=>{
            // first take the onchange value from the input box
            const value = e.target.value
            setSearch_Value(value)

        // now all the heavy filtering done in the startTransition
        startTransition(()=>{
            const result = products.filter((product) => 
              product.name.toLowerCase().includes(value.toLowerCase()) ||
              product.category.toLowerCase().includes(value.toLowerCase()) ||
              String(product.inStock).toLowerCase().includes(value.toLowerCase())
            )
            setFilteredItem(result)
        })

    }



  return (
    <div>
        <h1>useTransition Hook Product Filter:</h1>
        <p>React synchronously run the state</p>
        <p>useTransition hook used for to run long or heavy task in Transition so to avoid UI lagginess </p>

        <p>Search Product: <input type="text" value={search_value} onChange={onChangeHandler}/></p>

        <h2>Total Result: {filteredItem.length}</h2>
        {/* showing all product by deafult and then on basis of search value we render realtime product item  */}

        {/* isPending to show loading.... while heavy task runs */}
        {isPending && <p>Wait Filtering on.....</p>}

        {filteredItem.map((item)=>(
            <div key={item.id} style={{margin:"10px", padding:'5px', backgroundColor:'blue'}}>
                <h3>{item.name}</h3>
                <p>{item.category}</p>
                <p>{item.brand}</p>
                <p>{item.price}</p>
                
            </div>
        ))}
    

    </div>
  )
}

export default Transition;