import React from 'react'
// impoting the UseState 
import UseState from './Hooks/useState/UseState'
import UseEffect from './Hooks/useEffect/UseEffect'

import BgChanger from './Hooks/UseLayoutEffect/BgChanger'

import ConsumingContext from './Hooks/useContext/ConsumingContext'


import Counter from './Hooks/useReducer/Counter'

import Cart from './Hooks/useMemo/Cart'

import Index from './Hooks/useCallback'
import IndexTrans from './Hooks/useTransition/IndexTrans'


const App = () => {
  return (
    <>
      {/* <UseState /> */}
      
      {/* <UseEffect /> */}

      {/* < BgChanger /> */}


      {/* <ConsumingContext /> */}

      {/* for useReduce Hook */}
      {/* <Counter /> */}

      {/* for useMemo Hook */}
      {/* <Cart /> */}


      {/* useCallback */}
      {/* < Index />     */}


      {/* useTransition */}
      <IndexTrans />


    
    </>


  )
}

export default App