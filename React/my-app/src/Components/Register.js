


import React from 'react'

export default function Register(props) {
    let btnStyle;
    let btnPwdText;
    let btnPwdType;
    btnStyle = {
        backgroundColor: 'green',
        color: 'white'
    };

    if (props.showPwd === true){
        btnStyle.backgroundColor ='red';
        btnPwdText = "Hide Password";
        btnPwdType = "text";
        btnStyle.color = 'black';
    }else{
        btnPwdText = "Show Password";
        btnPwdType = "password";
    }

  return (
    <div className='container card p-4 mt-5 register-container'>
        <h3 className='text-center'> Registration Form React Practice</h3>
        <form onSubmit={props.submit}>
            {/* for name input */}
            <div className='form-group'>
                <label htmlFor='name'>Name:</label>
                <input type='text' name='name' className='form-control'/>
            </div>

            {/* for Email input */}
            <div className='form-group'>
                <label htmlFor='email'>Email:</label>
                <input type='email' name='email' className='form-control'/>
            </div>

            {/* for password input */}
            <div className='form-group'>
                <label htmlFor='pwd'>password:</label>
                {/* i am giving the input type name is ""pwd"" so you guys to know that while we capturing the value by pwd name in isRegisteredHandler */}
                <input type={btnPwdType} name='pwd' className='form-control'/>
            </div>
            <div className='btnbox'>
                <button type='submit' className='btn'>Register</button>
                <button type="button" className='btnpwd' style={btnStyle} onClick={props.showPwdHandler}>{btnPwdText}</button>
            </div>
        </form>
    </div>
  )
}
