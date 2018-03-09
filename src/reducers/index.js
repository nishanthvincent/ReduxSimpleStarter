import {combineReducers} from 'redux';
import BooksReducer from './reducer-book.js';
import ActiveBook from './reducer-active-book';

const RootReducer = combineReducers({

  books: BooksReducer,
  activeBook: ActiveBook

});

export default RootReducer;
