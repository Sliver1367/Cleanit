import {
    CALENDAR_PUSH,
    GET_DATE, IS_ACTIVE_EXPERT, SELECT_CATEGORY,
    SHOW_COMPONENT_CHECK_ORDER,
    SHOW_COMPONENT_JOIN,
    SHOW_COMPONENT_THANK_YOU, SHOW_REGISTRATION
} from "../actions/bookNowAction";

const initialState = {
    date: '',
    onShowJoin: false,
    onShowTY: false,
    onShowOrder: false,
    isActiveExpert: '',
    onPushCalendar: false,
    onShowReg: false,
    selectedCategory: 'all',
}

export const bookNowReducer = (state = initialState, action) => {
    switch (action.type) {
        case SELECT_CATEGORY:
            return {...state, selectedCategory: action.payload};
        case SHOW_REGISTRATION:
            return {...state, onShowReg: action.payload};
        case CALENDAR_PUSH:
            return {...state, onPushCalendar: action.payload};
        case GET_DATE:
            return {...state, date: action.payload};
        case SHOW_COMPONENT_JOIN:
            return {...state, onShowJoin: action.payload};
        case SHOW_COMPONENT_THANK_YOU:
            return {...state, onShowTY: !state.onShowTY};
        case SHOW_COMPONENT_CHECK_ORDER:
            return {...state, onShowOrder: action.payload};
        case IS_ACTIVE_EXPERT:
            return {...state, isActiveExpert: action.payload};
        default:
            return state;
    }
}