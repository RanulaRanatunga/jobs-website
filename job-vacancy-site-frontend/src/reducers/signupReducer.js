export default (state = null, action) => {
    switch (action.type) {
        case 'SIGN_UP':
            return action.payload
        case 'SIGN_UP_ERROR':
            return action.payload
        default:
            return state
    }
}