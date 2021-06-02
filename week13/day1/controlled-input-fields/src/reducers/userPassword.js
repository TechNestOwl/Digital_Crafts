import {
    USER_PASSWORD_INPUT,
} from "../action-type/userAction-types";
const initialState = "";

const userPassword = (state = initialState, action) => {
    switch(action.type) {
        case USER_PASSWORD_INPUT:
            return;
        default:
            return state;
    }
};
export default userPassword;