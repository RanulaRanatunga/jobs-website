export default (state = null, action) => {
    switch (action.type) {
        case 'GET_PROFILE_INFO':
            return action.payload
        case 'GET_PROFILE_INFO_ERROR':
            return action.payload
        default:
            return state
    }
}