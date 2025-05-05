// useRef: it access the html element directlty .current
//  it used for focus the input box , used to store prev state value

import React, { useRef, useState } from 'react'

const IndexRef = () => {
    // to store the value in the input box
    const [currentValue, setCurrentValue] = useState('');



    const InputRef = useRef()
    console.log(InputRef)


    // here we creating a method to focus the box
    const Handleclick = () =>{
        InputRef.current.focus()
        // console.log(InputRef.current.value);
        // here we stroing the value in input box that the user type
        setCurrentValue(InputRef.current.value)

        
    }
  return (
    <div>

        <label htmlFor="name">Name: </label>
        <input ref={InputRef} type="text" id='name' />
        {/* on click of button Focus ; the value in the input box will be display in h2 */}
        <button onClick={Handleclick}>Focus</button> 
        <h2>{currentValue}</h2>

    </div>
  )
}

export default IndexRef