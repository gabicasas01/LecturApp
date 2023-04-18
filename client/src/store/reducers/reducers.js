import { combineReducers } from 'redux';
import booksReducer from './booksReducer'
import usersReducer from './usersReducer'

const rootReducer = combineReducers({
  books: booksReducer,
  characters: usersReducer
});

export default rootReducer;
