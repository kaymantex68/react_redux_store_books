const initialState = {
    items: [],
}

const cartReduser = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_BOOK_TO_CART':
            return {
                ...state,
                items: [...state.items, action.payload],
            }
        case "REMOVE_BOOK_FROM_CART":
            return {
                ...state,
                items: state.items.filter(item=> item.id != action.payload.id )
            }
        default:
            return state;
    }
}

export default cartReduser;