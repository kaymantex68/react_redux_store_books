import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as booksActions from '../actions/books';
import App from '../components/App.jsx';
import orderBy from 'lodash/orderBy.js';

const sortBy = (books, filter) => {
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

const mapStateToProps = ({ books }) => ({
    books: sortBy(books.items, books.filter),
    isReady: books.isReady,
})

const mapDispatchToProps = (dispatch) => ({
    ...bindActionCreators(booksActions, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(App);