import React from 'react'

const Register = ({
    handleIncrement,
    handleDecrement,
    currentValue,
   

}) => (

    <div >
   
    <button onClick = { handleIncrement } > { currentValue } </button>   
    <button onClick = { handleDecrement } > - </button>

    </div>

);

export default Register;
