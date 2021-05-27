import {
    incrementOne,
    decrementOne,
} from "../action-types/actionTypes";

const initialState = {
    counter: 0,

};
function rootReducer(state = initialState, action){
    switch(action.type){
        case incrementOne:
            return {...state, counter: state.counter + 1};
        case decrementOne:
            return {...state, counter: state.counter - 1};
        default:
            return state;
    }
};

export default rootReducer;