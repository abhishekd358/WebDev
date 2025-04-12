import React, { useState } from "react";

const MultipleInputHandling = () => {
  // cresting state to store multiple item
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    addhar: "",
    address: "",
  });

  const onChangeHandler = (e) => {
    // In Simple Terms:
    // When a user types in any input field, this function is triggered.
    // It finds out which field was changed and what the new value is.
    // It then updates the stored data (state) to include this new value, while    keeping the rest of the data the same.

    const { name, value } = e.target; // Destructure the name and value
    // name: This is the name of the input field (like name, age, addhar, or address).
    // value: This is the current content of the input field (what the user has typed).

    console.log(e.target);
    setFormData((prevData) => ({
      ...prevData,
      [name]: value, // Use the input name to update the correct field
    }));
  };

  // on submiting the button we create a pop a msg and submit the value
  const onSubmitHandler = (e) => {
    e.preventDefault(); // Prevent the default form submission
    console.log(formData); // Log the form data
    // Here you can handle the form submission, like sending data to an API

    // Clear the form after submission
    setFormData({
      name: "",
      age: "",
      addhar: "",
      address: "",
    });
  };

  return (
    <>
      <hr style={{ height: "3px", backgroundColor: "blue" }} />
      <p style={{ fontWeight: "700", fontSize: "20px", color: "green" }}>
        ===============MultipleInputHandling=============={" "}
      </p>
      <div
        style={{
          display: "flex",
          justifyContent: "left",
          alignItems: "left",
          wrap: "wrap",
        }}
      >
        {/* here we creating a */}
        <form onSubmit={onSubmitHandler}>
          <label htmlFor="name">Name: </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={onChangeHandler}
          />
          <br />
          <label htmlFor="age">Age: </label>
          <input
            type="text"
            name="age"
            value={formData.age}
            onChange={onChangeHandler}
          />
          <br />
          <label htmlFor="addhar">Adhaar Number: </label>
          <input
            type="text"
            name="addhar"
            value={formData.addhar}
            onChange={onChangeHandler}
          />
          <br />
          <label htmlFor="address">Address: </label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={onChangeHandler}
          />

          {/* creating submit button and adding feature that as soon we as we submit the form we clear value from the state */}
          <br />
          <button style={{ float: "left", marginTop: "20px" }}>Submit</button>
        </form>
      </div>

      <hr style={{ height: "3px", backgroundColor: "red" }} />
    </>
  );
};

export default MultipleInputHandling;
