// You will create two components. One component will be an input field for username and email.
//  You will have a form button that will submit this information.
import React from 'react'
import {useSelector, useDispatch} from "react-redux";
import { inputEmail, inputPassword, inputUserName } from '../action/userActions';


export default function inputField() {

    // const dispatch = useDispatch();
    // const userName = useSelector((state) => state.userName);

    return (
        <div>
            <h1>User Sign In</h1>

            <form onSubmit="">
                
                <input 
                type="text" 
                name="userName"
                placeholder="Enter Username"
                // value={userName}
                // onChange={(e)=> inputUserName(dispatch, e.target.value)}
                >Username</input>

                {/* <input 
                type="email"
                 name="email"
                 placeholder="Enter Email"
                 value={userEmail}
                 onChange={(e)=> inputEmail(dispatch, e.target.value)}
                 >Email</input>

                <input 
                type="password"
                 name="password"
                 placeholder="Enter Password"
                 value={userPassword}
                 onChange={(e)=> inputPassword(dispatch, e.target.value)}
                 >Password</input> */}

                <button type="submit">Submit</button>
            </form>
            
        </div>
    )
};
