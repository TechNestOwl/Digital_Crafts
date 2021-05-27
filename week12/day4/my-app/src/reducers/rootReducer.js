import {INSERT_OBJ} from "../action-types/action-types"
const initialState = {
    fakeData: [],
};

function rootReducer(state = initialState,action){
    switch(action.type){
        case INSERT_OBJ:
            return {fakeData:[{userName:"jow", height:"7.1"}]}
        default:
            return state;
    }

};

export default rootReducer;