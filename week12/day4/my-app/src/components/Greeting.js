import React from 'react'
import {useSelector, useDispatch} from "react-redux";
import {changeFakeDataToJoe} from "../actions/greetingActions"

 
export default function Greeting() {
    const fakeData = useSelector((state)=> state.fakeData);
    const dispatch = useDispatch();

    return (
        <div>
            <h1>Hello Redux</h1>
            <p></p>
        </div>
    )
}
