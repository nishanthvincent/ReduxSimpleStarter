import {combineReducers} from 'redux';
import BooksReducer from './reducer-book.js';

const RootReducer = combineReducers({
    
    books: BooksReducer
    
  });
  
  export default RootReducer;


