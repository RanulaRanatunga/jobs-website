export default (state = null, action) => {
    switch (action.type) {
        case 'ALL_PROFILES':
            return action.payload
        case 'ALL_PROFILES_ERROR':
            return action.payload
        default:
            return state
    }
}