export default (state = null, action) => {
    switch (action.type) {
        case 'APPROVAL_STATUS':
            return action.payload
        case 'APPROVAL_STATUS_ERROR':
            return action.payload
        default:
            return state
    }
}