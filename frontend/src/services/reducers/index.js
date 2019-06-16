const defaultState = {
    loading: false,
    offices: [],
    error: null
}

const rootReducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'FETCH_OFFICES_PENDING':
            return {
                ...state,
                loading: true
            }
        case 'FETCH_OFFICES_SUCCESS':
            return {
                ...state,
                loading: false,
                offices: action.payload
            }
        case 'FETCH_OFFICES_ERROR':
            return {
                ...state,
                loading: false,
                error: action.error
            }
        default:
            return state;
    }
}

export default rootReducer;