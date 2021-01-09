const initialState = {
    isReady: false,
    items: null,
    filter: 'all',
}

const booksReduser = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_BOOKS':
            return {
                ...state,
                items: action.payload,
                isReady: true,
            }
        case 'SET_FILTER':
            return {
                ...state,
                filter: action.payload,
            }
        case "SET_IS_READY":
            return {
                ...state,
                isReady: action.payload,
            }
        default:
            return state;
    }
}

export default booksReduser;