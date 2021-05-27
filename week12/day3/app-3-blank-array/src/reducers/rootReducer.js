const initialState = {
    arryOne: [],
};

function rootReducer(state = initialState, action){
    switch(action.type){
        case "SWITCH_ARRAY":
            return{...state, arryOne:[...state.arryOne, {name:"Joe"},{name2:"Mikael"}]};
        default:
            return state;

    }
};

export default rootReducer;