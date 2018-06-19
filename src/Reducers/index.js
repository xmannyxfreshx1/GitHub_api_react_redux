import {GET_REPO} from "../Constants/Action-types";


const initialState ={
    repos: null
};

const rootReducer= (state = initialState, action) => {
    console.log(action);
    switch (action.type){
        case GET_REPO:
            return{ ...state, repos: state.repos.concat(action.payload) };
        default:
            return state;
    }
};

export default rootReducer;