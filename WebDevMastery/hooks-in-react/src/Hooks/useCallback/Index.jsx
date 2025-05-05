// here is Index Component in it we have HandleCount method which pass to child component i.e Button 
// when the Button of background change clicked this Button Component re-render to avoid we use UseCallback Hook


import React, { useState, useCallback } from 'react'
import ButtonComponent from './ButtonComponent'

const Index = () => {
    const [darkMode, setDarkMode] = useState(false)
    const [count, setCount] = useState(0)


    // this below method going to used in Button Component
    // const HandleCount = () =>{
    //     setCount(count + 1)
    //     console.log(count)
    // }

// ------------------to avoid re render of child component method
    const HandleCount = useCallback(
      () => {
        setCount((prev)=> prev+1)
      },
      [],
    )
    

  return (
      <div style={{background : darkMode ? 'black' : 'white', color: darkMode ? 'white' : 'black' , width : '1200px', height:'300px'}}>
        <h1>THis is useCallback Hook Practice</h1>
        <h2>Count : {count}</h2>

        {/* here we creating a showing Child Component */}
        <ButtonComponent passMethod={HandleCount} >{console.log('re-render')}</ButtonComponent>  
        {/* the above component get re-render */}

        <button onClick={()=> { console.log('cliked toggle theme')
            setDarkMode(!darkMode)}}>Toggle Theme</button>


      </div>
    )
}

export default Index