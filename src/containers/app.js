import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as booksActions from '../actions/books';
import * as booksFilter from '../actions/filter';
import App from '../components/App.jsx';
import orderBy from 'lodash/orderBy.js';



const sortBy = (books, filter, searchQuery) => {
    books = books.filter(
        o =>
        o.title.toLowerCase().indexOf(searchQuery.toLowerCase()) >=0
        || o.author.toLowerCase().indexOf(searchQuery.toLowerCase()) >=0
        );
    switch (filter) {
        case 'all':
            return books;
        case 'hight_coast':
            return orderBy(books, 'price', 'desc');
        case 'low_coast':
            return orderBy(books, 'price', 'asc');
        case 'author':
            return orderBy(books, 'author', 'asc');
        default:
            return books;
    }
}

const filterBooks = (books, searchQuery) => {
    books = books.filter(
        o =>
        o.title.toLowerCase().indexOf(searchQuery.toLowerCase()) >=0
        // || o.author.toLowerCase().indexOf(searchQuery.toLowerCase()) >=0
        );
}

const mapStateToProps = ({ books, filter }) => ({
    books: books.items && sortBy( books.items, filter.items, filter.searchQuery),
    isReady: books.isReady,
    filter: filter.items,
    searchQuery: filter.searchQuery,
})

const mapDispatchToProps = (dispatch) => ({
    ...bindActionCreators(booksActions, dispatch),
    ...bindActionCreators(booksFilter, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(App);