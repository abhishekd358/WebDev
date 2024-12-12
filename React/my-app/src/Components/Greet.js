import React from 'react'

export default function Greet(props) {
  return (
    <div className='container card p-4 mt-5 register-container'>
        <h3>Thank you for joining us {props.name} !!!! </h3>
    </div>
  );
}
