import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';
import ActiveBook from './reducer_active_book';

//Any key to the object we provide to combineReducer ends up as a key on our global state 
const rootReducer = combineReducers({
  books: BooksReducer,
  activeBook: ActiveBook,
});

export default rootReducer;
