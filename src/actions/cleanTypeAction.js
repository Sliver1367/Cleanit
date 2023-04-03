export const CHANGE_CLEANTYPE = 'CHANGE_CLEANTYPE'

export const changeCleanType = cleanType => {
    return {
        type: CHANGE_CLEANTYPE,
        payload: cleanType
    }
}