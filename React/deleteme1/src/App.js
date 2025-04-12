import './App.css';
import Register from './Components/Register';
import Greet from './Components/Greet';
import React, {Component} from 'react';

class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      flagSubmitted : false,
      name:null,
      email: null,
      password: null,
      showpwd : false
    };
  }

  submitHandler= (event)=>{
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.pwd.value;
    this.setState({name, email,password, flagSubmitted: true}, ()=>{
      console.log(this.state);
    });
  }


  showpwdHandler = () => {

    this.setState({showpwd : !this.state.showpwd, type: 'text'},()=>console.log(this.state.showpwd));
  }



  render(){
    return (
      <div>
        {this.state.flagSubmitted ?
        <Greet/>
        : 
        <Register submit= {this.submitHandler} showpwdHandler={this.showpwdHandler} showpwd = {this.state.showpwd}/>
      }
      </div>
    );
  }
  
};

export default App;
