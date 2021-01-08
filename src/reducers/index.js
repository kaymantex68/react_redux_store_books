import { combineReducers } from 'redux'
import books from './books'

const rootReduser = combineReducers({
    books
});

export default rootReduser;