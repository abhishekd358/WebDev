import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <h1>Learn Hooks</h1>
      <li>
        <Link to={'/useTransition'}  style={{color:"Blue", fontSize:'28px'}}>useTransition</Link>
      </li>

      <li>
        <Link to={'/useMemo'}  style={{color:"Blue", fontSize:'28px'}}>useMemo</Link>
      </li>
      
    </div>
  );
};

export default HomePage;
