import { combineReducers } from 'redux'
import books from './books'
import cart from './cart'
import filter from './filter'

const rootReduser = combineReducers({
    books,
    cart,
    filter
});

export default rootReduser;