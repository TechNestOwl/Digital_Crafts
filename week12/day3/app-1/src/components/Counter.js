import React from 'react'
import {useSelector, useDispatch} from 'react-redux';
import {
    incrementOne,
    decrementOne,
} from "../actions/counterActions";


export default function Counter() {
    const counter = useSelector((state) => state.counter);
    const dispatch = useDispatch();

    return (
        <div>
            <h1>Counter</h1>
            <br></br>
            <button onClick={()=> incrementOne(dispatch)}>Add</button>
            <p>{counter}</p>
            <button onClick={()=> decrementOne(dispatch)}>Add</button>
        </div>
    )
};
