import React from 'react';
import { connect } from 'react-redux';
import { setBooks } from './actions/books';
import axios from 'axios';
import { Container, Card } from 'semantic-ui-react'

import Menu from './conponents/Menu.jsx'
import BookCard from './conponents/BookCard.jsx'
import classes from './App.module.css'


function App(props) {

  React.useState(() => {
    const { setBooks } = props;
    axios.get('/books.json').then(response => {
      setBooks(response.data);
    })
  })

  const { books, isReady } = props;

  return (
    <div className={classes.main_container}>
      <Container>
        <Menu />
        <Card.Group itemsPerRow={4}>
          {
            !isReady ? 'Loading...'
              :
              books.map((book, key) => {
                return (
                  <BookCard {...book} key={`book_card_key_${key}`} />
                )
              })
          }
        </Card.Group>
      </Container>
    </div>
  );
}
const mapStateToProps = ({ books }) => ({
  books: books.items,
  isReady: books.isReady
})

const mapDispatchToProps = (dispatch) => ({
  setBooks: books => dispatch(setBooks(books))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
