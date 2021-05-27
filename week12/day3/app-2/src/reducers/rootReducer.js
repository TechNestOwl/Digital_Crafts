const initialState = {
    userName: "Gill"
};

function rootReducer(state = initialState, action){
    switch(action.type){
        case "CHANGE_NAME":
            return {...state, userName: "Joe"}
        default:
            return state;
    }
}

export default rootReducer;