import React from "react";
import Transition from "./components/Transition";
import { Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import "./App.css"
import Memo from "./components/Memo";

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/useTransition' element={<Transition/>}/>
        <Route path='/useMemo' element={<Memo/>}/>
      </Routes>
    </>
  );
};

export default App;
