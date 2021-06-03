import React from 'react'
import Register from '../counters'

const Count = ({
    countAdd,
    countValue,

}) => (

    <div > 
        <div>+++++++++++</div>
    <button onClick = {countAdd} > +++++  </button> 
    {countValue.map(() => <Register/>)}
    </div>

);

export default Count;
