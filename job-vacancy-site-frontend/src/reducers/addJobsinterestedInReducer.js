export default (state = null, action) => {
    switch (action.type) {
        case 'JOBS_INTERESTED_IN':
            return action.payload
        case 'JOBS_INTERESTED_IN_ERROR':
            return action.payload
        default:
            return state
    }
}