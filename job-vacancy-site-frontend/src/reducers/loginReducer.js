export default (state = null, action) => {
    switch (action.type) {
        case 'SIGN_IN':
            return action.payload
        case 'AUTH_ERROR':
            return action.payload
        default:
            return state
    }
}