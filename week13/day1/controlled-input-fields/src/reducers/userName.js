import {
    USERNAME_INPUT,
} from "../action-type/userAction-types"
const initialState = "";

const userName = (state = initialState, action) => {
    switch(action.type) {
        case USERNAME_INPUT:
            return;
        default:
            return state;
    }
};
export default userName;