import React from 'react'
import {useSelector, useDispatch} from 'react-redux';


export default function Counter() {
    const counter = useSelector((state) => state.counter);
    const dispatch = useDispatch();

    return (
        <div>
            <h1>Counter</h1>
            <br></br>
            <button onClick={()=> dispatch({type:"SUBTRACT"})}>Add</button>
            <p>{counter}</p>
            <button onClick={()=> dispatch({type:"ADD"})}>Add</button>
        </div>
    )
}
