import React from 'react';
import { connect } from 'react-redux';
import { setBooks } from './actions/books';
import axios from 'axios';

function App(props) {

  React.useState(() => {
    const { setBooks } = props;
    axios.get('/books.json').then(response => {
      setBooks(response.data);
    })
  })

  const { books } = props;

  return (
    <>
      <ul>
        {
          !books ? 'загрузка...' : books.map((book, key) => {
            return (
              <li key={`book_li_key_${key}`} style={{ color: "black" }}><b>{book.title}</b> - {book.author}</li>
            )
          })
        }
      </ul>
    </>
  );
}
const mapStateToProps = ({ books }) => ({
  books: books.items
})

const mapDispatchToProps = (dispatch) => ({
  setBooks: books => dispatch(setBooks(books))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
