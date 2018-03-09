import {combineReducers} from 'redux';
import BooksReducer from './reducer-book.js';
import ActiveBookReducer from './reducer-active-book';

const RootReducer = combineReducers({

  books: BooksReducer,
  activeBook: ActiveBookReducer

});

export default RootReducer;
