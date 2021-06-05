import React from 'react'
import RegisterContainer from '../containers'

const Count = ({
    countAdd,
    countValue,

}) => (

    <div > 
        <div>+++++++++++</div>
    <button onClick = {countAdd} > +++++</button> 
{[...Array(countValue)].map(() => <RegisterContainer/>)}
    </div>

);

export default Count;
