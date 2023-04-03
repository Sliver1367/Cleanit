export const SHOW_COMPONENT_JOIN = 'SHOW_COMPONENT_JOIN';
export const SHOW_COMPONENT_THANK_YOU = 'SHOW_COMPONENT_THANK_YOU';
export const SHOW_COMPONENT_CHECK_ORDER = 'SHOW_COMPONENT_CHECK_ORDER';
export const GET_DATE = 'GET_DATE';
export const IS_ACTIVE_EXPERT = 'IS_ACTIVE_EXPERT';
export const CALENDAR_PUSH = 'CALENDAR_PUSH';
export const SHOW_REGISTRATION = 'SHOW_REGISTRATION';
export const SELECT_CATEGORY = 'SELECT_CATEGORY';


export const setSelectedCategory = (name) => {
    return {
        type: SELECT_CATEGORY,
        payload: name
    }
}

export const showRegistration = (name) => {
    return {
        type: SHOW_REGISTRATION,
        payload: name
    }
}

export const onPushedCalendar = (name) => {
    return {
        type: CALENDAR_PUSH,
        payload: name
    }
}

export const isActiveExpert = (name) => {
    return {
        type: IS_ACTIVE_EXPERT,
        payload: name
    }
}

export const getDate = (date) => {
    return {
        type: GET_DATE,
        payload: date
    }
}

export const showComponentJoin = (name) => {
    return {
        type: SHOW_COMPONENT_JOIN,
        payload: name
    }
}

export const showComponentThankYou = () => {
    return {
        type: SHOW_COMPONENT_THANK_YOU,
    }
}

export const showComponentCheckOrder = (name) => {
    return {
        type: SHOW_COMPONENT_CHECK_ORDER,
        payload: name
    }
}