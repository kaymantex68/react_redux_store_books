const initialState = {
    searchQuery: '',
    items: 'all',
}

const filterReduser = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_QUERY':
            return {
                ...state,
                searchQuery: action.payload,
            }
        case 'SET_FILTER':
            return {
                ...state,
                items: action.payload,
            }
        default:
            return state;
    }
}

export default filterReduser;