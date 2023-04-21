import { combineReducers } from 'redux';
import booksReducer from './booksReducer'
import userReducer from './userReducer';

const rootReducer = combineReducers({
  books: booksReducer,
  user: userReducer,
});

export default rootReducer;
