import React, { useState, useEffect } from "react";

const UseEffect = () => {
  // we going to see useEffect hook functionality in this file
  // so our moto is :  changing the title of the page window of browser as our counter value change

  // here we create a state for counter
  const [counter, setCounter] = useState(0);


//   now here we implementing as my value of counter change then we going to refelcet the change in the titile as well
    useEffect(() => {
        // console.log('before',document.title);
        document.title = counter
        // console.log('after',document.title);

    }, [counter])
    

  return (
    <>
      <div>
        <h1 style={{ textAlign: "center" }}>{counter}</h1>
        <button
          onClick={() => setCounter(counter + 1)}
          style={{ marginRight: "10px" }}>
          Increment
        </button>
        <button onClick={() => setCounter(counter - 1)}>Decrement</button>
      </div>
    </>
  );
};

export default UseEffect;
