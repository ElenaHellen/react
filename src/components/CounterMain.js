import React from 'react'

const Count = ({
    CountAdd,
    count,

}) => (

    <div >
    <button onClick = { CountAdd} > {count}  </button> 
    
    </div>

);

export default Count;
