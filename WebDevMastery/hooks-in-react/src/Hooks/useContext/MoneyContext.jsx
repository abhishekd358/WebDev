// 1st Stage: were we declaring the createContext tp variable as well as we exporting it.


import { createContext } from "react";
// here we imported the createContext

// assign the createContext to variable
const MoneyContext = createContext();

export default MoneyContext;// here we exporting