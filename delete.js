//=================================================== 🔴 GENERATORS
function* test(){
    yield "Abhi"  // yeild : pasuse executionm
    yield "shek"

}

const gen = test()
// .next() =------> Resume the generatior
console.log(gen.next());
console.log(gen.next());
console.log(gen.next()); // when generator complete execution then it return { done : true }


// Generators used in:
// Redux Saga
// lazy loading
// streaming
// async workflows
// redux state management ke liye
// custom iterators



// ===================================================================== 🔴DEBOUNCE 

// function debounce(fn, delay){
//     let timer;

//     // return ek function karenga
//     return function(...args){
//         clearTimeout(timer) // clear if any previous timer is present

//         // this function take argument till user stop
//         timer = setTimeout(() => {
//             fn.apply(this, args)
            
//         }, delay);


//     }
     
// }


// // User types "h"
// //     ↓
// // Timer starts (500ms)

// // User types "he"
// //     ↓
// // Old timer cancelled
// // New timer starts

// // User types "hel"
// //     ↓
// // Old timer cancelled
// // New timer starts

// // User stops typing
// //     ↓
// // 500ms completed
// //     ↓
// // API Call happens ✅


// debounce(searchAPI, delay)

// const searchAPI = async()=>{
//     const response = fetch("url")
//     const data  = await response.json()
//     return data


// }

