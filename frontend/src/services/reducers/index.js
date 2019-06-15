const defaultState = {
    list_fetch: [],
}

const rootReducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'FETCH':
            return {
                ...state,
                list_fetch: action.payload.results,
            }
        default:
            return state;
    }
}

export default rootReducer;