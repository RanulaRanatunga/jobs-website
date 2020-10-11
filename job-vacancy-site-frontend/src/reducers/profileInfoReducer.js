export default (state = null, action) => {
    switch (action.type) {
        case 'PROFILE_INFO':
            return action.payload
        case 'PROFILE_INFO_ERROR':
            return action.payload
        default:
            return state
    }
}