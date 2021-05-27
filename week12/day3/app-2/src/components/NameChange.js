import React from 'react'
import {useSelector, useDispatch} from 'react-redux';

export default function NameChange() {

    const userName = useSelector((state)=> state.userName);
    const dispatch = useDispatch();

    return (
        <div>
            <h1>Name Change</h1>
            <p>Your username is: {userName}</p>
            <p>Click the button below to change it to 'Joe'.</p>
            <button onClick={()=> dispatch({type:"CHANGE_NAME"})}>Change UserName</button>
        </div>
    )
}
