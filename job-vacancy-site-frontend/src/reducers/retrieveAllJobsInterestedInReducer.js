export default (state = null, action) => {
    switch (action.type) {
        case 'ALL_JOBS_INTERESTED_IN':
            return action.payload
        case 'ALL_JOBS_INTERESTED_IN_ERROR':
            return action.payload
        default:
            return state
    }
}