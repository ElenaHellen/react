import React from 'react'
import TextField from '@material-ui/core/TextField';

const Register = ({
      handleIncrement, 
      handleDecrement, 
      handleIncrementCounter,
      changeDisplayFormStatus, 
      currentValue, 
      displayForm,
      displayCounter
}) =>  (

<div>
      <div>{currentValue}</div>
      <button onClick = {handleIncrement}>{currentValue}</button>
      {displayCounter && 
      <button onClick = {handleIncrementCounter}>{displayCounter}</button>}
      <button onClick = {handleDecrement}>-</button>


      <button onClick={changeDisplayFormStatus}>Change Form Status</button>
      {displayForm &&
      <form>
      <TextField label="Standart" />
      <TextField label="Filled" />
      <TextField label="Outlined" />
      </form>
      }
</div>
);

export default Register;