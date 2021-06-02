import {
    USERNAME_INPUT,
    USER_EMAIL_INPUT,
    USER_PASSWORD_INPUT,
} from "../action-type/userAction-types";

export const inputUserName = (dispatch) => {
    return dispatch ({type: USERNAME_INPUT});
};
export const inputEmail = (dispatch) => {
    return dispatch ({type: USER_EMAIL_INPUT});
};
export const inputPassword = (dispatch) => {
    return dispatch ({type: USER_PASSWORD_INPUT});
};

