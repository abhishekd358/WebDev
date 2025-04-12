import React, { useEffect, useState } from "react";

const ApiHandling = () => {
  // creating state
  const [apiData, setApidata] = useState([]);

  useEffect(() => {
    // creating a async arrow function
    const fetchData = async () => {
      const response = await fetch("https://dummyjson.com/posts");

      const data = await response.json();
      // console.log(data.posts);
      setApidata(data.posts);
    };
    fetchData();
  }, []);

  return (
    <>
      <div>
        <hr style={{height:"3px",backgroundColor:"blue"}}/>
        <p style={{fontWeight:"700", fontSize:"20px", color:"green"}}>===============ApiHandling==============  </p>
        <br></br>
        <div>
          {apiData.map((post) => (
            <div key={post.id}>
              <h4 style={{textAlign:"left"}}>{post.title}</h4>
              <p style={{textAlign:"left", opacity:"70%"}}>{post.body}</p>
            </div>
          ))}
        </div>
        <hr style={{height:"3px",backgroundColor:"red"}}/>
      </div>
    </>
  );
};

export default ApiHandling;
