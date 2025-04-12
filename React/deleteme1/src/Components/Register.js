import './Register.css'
import React from "react";
function Register(props) {

  let btnstyle;
    btnstyle = {
        backgroundColor:'green',
        color : 'white',
    }
  let btnText, passBoxType;
  if (props.showpwd === true){
    btnstyle.backgroundColor = 'red';
    btnText = "Hide Password"; 
    passBoxType = "text";

  }else{
    btnText = "Show Password";
    passBoxType = "password";
  }


    return (
      <div className='form-container'>
        <form className='form-main' onSubmit={props.submit}>
          <label htmlFor='name'>Name:</label>
          <input type='text' name='name' required></input>
          <br/>
        
          <label htmlFor='email'>email:</label>
          <input type='email' name='ema/il'></input>
          <br/>

          <label htmlFor='pwd'>password:</label>
          <input type={passBoxType} name='pwd'></input>
          
          <br/>
          <button type ='Submit'>Submit</button>

          <br/>
          <button type ="button" style={btnstyle} onClick={props.showpwdHandler} >{btnText}</button>
          
        </form>

      </div>
    )
};

export default Register;