import React from 'react'
import {useSelector, useDispatch} from 'react-redux';


export default function ReturnArry() {
    const arryOne = useSelector((state)=> state.arryOne);
    const dispatch = useDispatch();

    return (
        <div>
            {arryOne.map((varName, index)=>(
                <li key={index}></li>
            ))}
            <h1>Changing an array</h1>
            <p>Empty array to: {arryOne}</p>

            <button onClick={()=> dispatch({type:"SWITCH_ARRAY"})}>Smash Me</button>
            
        </div>
    )
};
