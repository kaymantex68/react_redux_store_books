import React from 'react';
import { connect } from 'react-redux';
import { setBooks } from './actions/books'


function App(props) {
  const { books } = props.books;
  const { setBooks } = props;
  console.info('PROPS-BOOKS: ', books);
  return (
    <>
      <button onClick={()=>{setBooks(['new booksssssss'])}}>добавить все книги</button>
      {
        books.map((item, key) => {
          return (
            <div key={key}>
              {item}
            </div>
          )
        })
      }
    </>
  );
}
const mapStateToProps = (state) => ({
  ...state
})

const mapDispatchToProps = (dispatch) => ({
  setBooks: books => dispatch(setBooks(books))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
