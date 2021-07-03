import {GETDATA} from './actionType';

const InitialState = {
    products: []
};

const AppReducer = (state = InitialState, action) => {
    switch (action.type) {
        case GETDATA : 
            return {
                ...state,
                products : action.value
            }
        default:
           return state;
    }
}


export default AppReducer;