import { createSlice } from '@reduxjs/toolkit'

//  Here current Situation of our fridge availabale all item(state)
const initialState = {
  milk: 'Full', // Start with full milk
  juice: 'Full' // Start with full juice
}

// here we call the createSlice to create the Drink section
export const drinkSlice = createSlice({

  name: 'drinkSlice', // reducer function ; function that done by our mom and dad
  initialState,

   // reducer function ; function that done by our mom and dad
  reducers: {
    // Rule for when milk is used
    useMilk: (state) => {
      if (state.milk === 'Full'){return state.milk = 'Half Full'}
      else if (state.milk === 'Half Full'){return state.milk = 'Almost Empty'}
      else state.milk = 'Empty'
    },
    // Rule for when we buy new milk
    buyMilk: (state) => {
      state.milk = 'Full'
    },
    // Rule for using juice
    useJuice: (state) => {
      state.juice = 'Empty'
    }
  }
})

// Export the shopping list notes (Actions) we can pin
// `drinkSlice.actions` gives us the note-writers (action creators)
// useMilk: useMilkAction is a function that, when called, writes the note { type: 'drinkSection/useMilk' }
// buyMilk: buyMilkAction writes the note { type: 'drinkSection/buyMilk' }
export const { useMilk, buyMilk, useJuice } = drinkSlice.actions

// Export the Slice itself (Reducer)
export default drinkSlice.reducer