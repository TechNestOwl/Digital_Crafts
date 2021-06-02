import {
    USER_EMAIL_INPUT,
} from "../action-type/userAction-types";
const initialState = "";

const userEmail = (state = initialState, action) => {
    switch(action.type) {
        case USER_EMAIL_INPUT:
            return;
        default:
            return state;
    }
};
export default userEmail;