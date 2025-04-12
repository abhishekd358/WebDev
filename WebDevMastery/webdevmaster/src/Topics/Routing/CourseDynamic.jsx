import React from "react";

import { Link } from "react-router-dom";

// for understaing of dynamic routing and Link
const CourseDynamic = () => {
  // we have a array of courses as oe click on list of course we change the url with that respective course id

  const arr = [
    { id: "PYTON999", course: "Python On Your Brain", Price: "Rs.999" },
    { id: "WEB1000", course: "Web Master", Price: "Rs.1999" },
    { id: "DSA001", course: "DSA Cracking", Price: "Rs.1000" },
  ];

  return (
    <>
        {arr.map((data)=>(<div key={data.id}>
        <Link to={data.id}><h1>{data.course}</h1></Link>
        </div>))}
    </>
    );
};

export default CourseDynamic;
