import {CHANGE_CLEANTYPE} from "../actions/cleanTypeAction.js";


const initialState = {
    cleanType: 'Regularly'
}
export const cleanTypeReducer = (type = initialState, action) => {
    switch (action.type) {
        case CHANGE_CLEANTYPE:
            return {...type, cleanType: action.payload || type.cleanType}
        default:
            return type;
    }
}
