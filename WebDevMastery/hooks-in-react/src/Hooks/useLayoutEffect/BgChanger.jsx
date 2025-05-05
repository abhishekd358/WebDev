
import React, { useState, useLayoutEffect} from 'react'

const BgChanger = () => {

  // so useLayoutEffect :- is render the changes in UI before making Updates of changes in DOM

  // we creating the color state then as user click on button we change the value of color 
  const [color, setColor] = useState('purple')

  // as soon as color change we have to update its the value present in the state
  useLayoutEffect(() => {
    document.body.style.backgroundColor = color
  }, [color])


  return (
    <>
      <div className="container">
        <h1>changing Background colors</h1>
        <button onClick={()=>setColor('blue')}>blue</button>
        <button onClick={()=>setColor('grey')}>grey</button>
        <button onClick={()=>setColor('pink')}>pink</button>
        
      </div>
    </>
  )
}

export default BgChanger