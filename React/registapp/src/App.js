import './App.css';

import SignUp from './Components/SignUp';
import SignIn from './Components/SignIn';

import React, { Component } from 'react'

// importing the uuid
import { v4 as uuidv4 } from 'uuid';

// imorting firebase 
import {initializeApp} from 'firebase/app';


// authentication
import { getAuth , createUserWithEmailAndPassword, signInWithEmailAndPassword, sendEmailVerification} from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyCvSHeAxvuC17ImlgYb3haK0d6U-DhtSJ0",
  authDomain: "my-survey-2f485.firebaseapp.com",
  databaseURL: "https://my-survey-2f485-default-rtdb.firebaseio.com",
  projectId: "my-survey-2f485",
  storageBucket: "my-survey-2f485.firebasestorage.app",
  messagingSenderId: "134386460093",
  appId: "1:134386460093:web:12ebac442918b514391ed4"
};

// initailization
const  app = initializeApp(firebaseConfig);

const auth =getAuth(app);


class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      id: uuidv4(),
      // page : which track the components 0 means login(signIn) and 1 means create Account(signUp) 
      page : 1,
      type: 1,  // 0 means error, 1 means success
      message: '',
      name : '',
      email:'',
      password: '',
      confirmPassword: '',
    };
    }


  // hadler to switch to page sign in 
  pageSwithHandler = (event) => {
    event.preventDefault();
    this.setState({ page : !this.state.page, message:""});
  
  }
  
  signUpHandler = (event) =>{
    event.preventDefault();
    
    // capturing the data on event happing of click
    const email = event.target.email.value;
    const password = event.target.password.value;
    const confirmPassword = event.target.confirmPassword.value;
    
    // conditional check before passing the password and confirm password to the state we checks then after we going pass the data to state
    if (password !== confirmPassword){
      this.setState({ message: "Passwords does not match", type: 0})
      return;
    } else{
      // this give us a promise 
   createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      
      // Send email verification
      sendEmailVerification(userCredential.user)
        .then(() => {
          // Set success message and clear the form
          this.setState(
            { message: "User created successfully. Verification email sent.", type: 1 },
            () => {
              event.target.email.value = "";
              event.target.password.value = "";
              event.target.confirmPassword.value = "";
            }
          );
        })
        .catch((error) => {
          this.setState({ message: `Failed to send verification email: ${error.message}`, type: 0 });
        });})
    .catch((error) =>{
      this.setState({ message: error.message, type: 0 });
    
    });

    }
  }


  // ==============SignIn ==============

  sigInHandler = (event) =>{
    event.preventDefault();

    const email = event.target.email.value;
    const password = event.target.password.value;


    // promise from signwith
    signInWithEmailAndPassword(auth, email, password)
    .then((data)=>{
        console.log(data);
      // we can set a email verified or not 
      if (data.user.emailVerified === true) {
        this.setState({ message: "Login successfully", type: 1 });  
      }else{
          // email verification sending
          sendEmailVerification(data.user)
          .then(() => {
            this.setState({ message: "Email not verified. Verification email sent.", type: 0 });
          })
          .catch((error) => {
            this.setState({ message: `Failed to send verification email: ${error.message}`, type: 0 });
          });
        }
    })
    .catch((error)=>{
      this.setState({ message: error.message, type: 0 });
    });

  }




  render() {
    return (
      <div>
        { this.state.page ? 
        <SignUp 
        switch={this.pageSwithHandler} 
        signup={this.signUpHandler} 
        msg = {this.state.message}
        type = {this.state.type}
        /> 
        
        : <SignIn
        switch={this.pageSwithHandler} 
        login = {this.sigInHandler}
        msg = {this.state.message}
        type = {this.state.type}
        />}
      </div>
    )
  }
}


export default App;
