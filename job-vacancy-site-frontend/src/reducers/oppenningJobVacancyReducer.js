export default (state = null, action) => {
    switch (action.type) {
        case 'JOB_VACANCY':
            return action.payload
        case 'JOB_VACANCY_ERROR':
            return action.payload
        default:
            return state
    }
}