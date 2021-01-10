import React from 'react';
import axios from 'axios';

import { Container, Card } from 'semantic-ui-react'


import BookCard from './BookCard.jsx'
import Filter from '../containers/filter'
import Menu from '../containers/menu'
import classes from './App.module.css'


function App(props) {
  console.info('PROPS: ', props)
  React.useState(() => {
    const { setBooks } = props;
    axios.get('/books.json').then(response => {
      setBooks(response.data);
    })
  })

  const { books, isReady, setFilter } = props;

  return (

    <div className={classes.main_container}>
      <Container>
        <Menu />
        <Filter setFilter={setFilter} />
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

export default App;
