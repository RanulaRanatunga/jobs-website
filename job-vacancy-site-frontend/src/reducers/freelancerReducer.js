export default (state = null, action) => {
    switch (action.type) {
        case 'FREELANCER':
            return action.payload
        case 'FREELANCER_ERROR':
            return action.payload
        default:
            return state
    }
}