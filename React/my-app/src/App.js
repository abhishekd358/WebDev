import './App.css';

// Importing components
import Register from "./Components/Register";
import Greet from "./Components/Greet";

import React, { Component } from 'react';

class App extends Component {
  // Constructor
  constructor(props) {
    super(props);

    this.state = {
      isRegistered: false,
      showPwd : false,
      name: null,
      email: null,
      password: null
    };
  }

  // Method to handle form submission
  RegistrationHandler = (event) => {
    event.preventDefault(); // Prevents default form submission behavior
    // Retrieve data from the form  
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.pwd.value;
    this.setState({ name, email, password, isRegistered: true });
  };

  // Show Password Handler
  showPwdHandler = () => {
    this.setState({showPwd : !this.state.showPwd}) //toggle
  };



  render() {
    return (
      <div>
        {this.state.isRegistered ? (
          <Greet name={this.state.name} email={this.state.email} />
        ) : (
          <Register submit={this.RegistrationHandler} password={this.state.password} showPwd={this.state.showPwd} showPwdHandler = {this.showPwdHandler}/>
        )}
      </div>
    );
  }
}

export default App;
