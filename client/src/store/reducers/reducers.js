import { combineReducers } from 'redux';
import booksReducer from './booksReducer'
import userReducer from './userReducer';
import recommendationReducer from './recommendationReducer'

const rootReducer = combineReducers({
  books: booksReducer,
  user: userReducer,
  recommendation: recommendationReducer,
});

export default rootReducer;
