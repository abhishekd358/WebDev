import React from 'react'
// impoting the UseState 
import UseState from './Hooks/useState/UseState'
import UseEffect from './Hooks/useEffect/UseEffect'

import BgChanger from './Hooks/UseLayoutEffect/BgChanger'

import ConsumingContext from './Hooks/useContext/ConsumingContext'


import Counter from './Hooks/useReducer/Counter'
const App = () => {
  return (
    <>
      {/* <UseState /> */}
      
      {/* <UseEffect /> */}

      {/* < BgChanger /> */}


      {/* <ConsumingContext /> */}


      <Counter />
    </>
  )
}

export default App