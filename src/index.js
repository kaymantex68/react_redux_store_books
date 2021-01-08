import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './store'

store.dispatch({
  type: 'ADD_BOOKS',
  payload: 'Read the docs'
})

const delay = (ms,info) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(store.dispatch({
        type: 'ADD_BOOKS',
        payload: info
      }));
    }, ms)
  })
}

async function addBooks() {
  await delay(3000,'atlant govno');
  await delay(4000,'по ком звонит колокол тоже говно');
  await delay(2000,'стой кто ведет тоже самое');
  await delay(2000,'еще пара книг которые я проходил в школе');
  await delay(3000,'достоевский ништяк');
  await delay(4000,'пока все!!!');

}

addBooks();


console.log(store.getState())
console.log(store)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root')
);

