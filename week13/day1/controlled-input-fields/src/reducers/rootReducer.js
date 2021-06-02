import {combineReducers} from "redux";
import userName from "./userName";
import userEmail from "./userEmail";
import userPassword from "./userPassword";

const rootReducer = combineReducers({
    userName,
    userEmail,
    userPassword,
});

export default rootReducer;