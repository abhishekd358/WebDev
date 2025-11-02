// here we import the create method
import {create} from 'zustand'


// decalring a store or creating a store , in this our all states and all states handling methods included.
const useCounterStore = create((set)=>({
    // here we decalre state and it handling method as well
    count: 0,


    
    // methods which handles our state
    countIncrement:()=>set((state)=>({count:state.count +1 })), //immutable directly replace the state object

    countDecrement:()=>set((state)=>({count:state.count - 1 }))
}))

export default useCounterStore;









// // setState: method which update the state . this will be current state
// console.log("Updating State",useCounterStore.setState({count: 1}));  // we get undefiend but we able to set new value in state
// console.log("Current State",useCounterStore.getState());
// console.log("Intital state",useCounterStore.getInitialState());
// console.log("Subscribe",useCounterStore.subscribe((state)=>{console.log("Subscribed State Changed:", state)}));   // subscribe ek callback function leta hai jo har state change pe call hota hai.


// console.log("----------------------SECOND STATE-----------------------------");


// console.log("Updating State 2 times...",useCounterStore.setState({count: 10}));  // we get undefiend but we able to set new value in state
// console.log("Current State 2",useCounterStore.getState());
// console.log("Intital state 2",useCounterStore.getInitialState());