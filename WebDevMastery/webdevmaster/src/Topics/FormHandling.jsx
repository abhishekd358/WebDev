import React, { useState } from "react";

const FormHandling = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const greetMsg = (e)=>{
  //     alert('Thank for Submiting')
  // }

  return (
    <>
    <hr style={{height:"3px",backgroundColor:"blue"}}/>
    <p style={{fontWeight:"700", fontSize:"20px", color:"green"}}>===============FormHandling==============  </p>
    <div
      style={{
        display: "flex",
        justifyContent: "left",
        alignItems: "left",
        wrap: "wrap",
      }}
    >
      {/* here we creating a */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          alert(`Thank for Submiting your name is ${name} ${email}`),
            setName(""),
            setEmail(""),
            setPassword("");
        }}
        >
        <label htmlFor="name">Name: </label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          />
        <br />
        <label htmlFor="name">Email: </label>
        <input
          type="text"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          />
        <br />
        <label htmlFor="name">Password: </label>
        <input
          type="text"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          />

        {/* creating submit button and adding feature that as soon we as we submit the form we clear value from the state */}
        <br />
        <button style={{ float: "left" }}>Submit</button>
      </form>
    </div>
    <hr style={{height:"3px",backgroundColor:"red"}}/>
  </>
  );
};

export default FormHandling;











//  we can do it without the onChange event but handling form with only onSubmit does not efficent for user beacuse they can't able to see realtime updates of form field   . this method is less responsive forms


// Example Without Using onChange

// import React, { useState } from "react";

// const FormHandling = () => {
//   const [formData, setFormData] = useState({ name: "", email: "", password: "" });

//   const handleSubmit = (e) => {
//     e.preventDefault(); // Prevent page refresh
//     // Access values directly from form elements
//     const name = e.target.name.value;
//     const email = e.target.email.value;
//     const password = e.target.password.value;
    
//     console.log("Submitted Data:", { name, email, password });
    
//     // Optional: Display a thank you message
//     alert("Thank you for submitting!");

//     // Clear the form inputs by resetting the state
//     setFormData({ name: "", email: "", password: "" });
//   };

//   return (
//     <div style={{ display: "flex", justifyContent: "left", alignItems: "left", flexWrap: "wrap" }}>
//       <form onSubmit={handleSubmit}>
//         <label htmlFor="name">Name: </label>
//         <input
//           type="text"
//           name="name"
//           // Set value from the state directly
//           defaultValue={formData.name}
//         /> 
//          <br />
//         <button style={{ float: "left" }} type="submit">Submit</button>
//         </form>
//     </div>
//   );
// };




