// 2nd stage:

import React from "react";

import MoneyContext from "./MoneyContext"; // this is second step :  firstly we importing the context

const MoneyState = (props) => {
  //  here we providing the data whatever we want to consume in other components
  const moneyForPeople = 10000;
  return (
    // here we applying the provider on the MoneyContext
    <MoneyContext.Provider value={{ moneyForPeople }}>
      {props.children}
    </MoneyContext.Provider> // here we writing props.children beacuse whatever the children component want to consume under MoneyCOntext they can do it of consumation.
  );
};

// 3rd stage will be in main.jsx
export default MoneyState;
