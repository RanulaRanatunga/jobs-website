export default (state = null, action) => {
    switch (action.type) {
        case 'CHECK_BOX':
            return action.payload
        case 'CHECK_BOX_ERROR':
            return action.payload
        default:
            return state
    }
}