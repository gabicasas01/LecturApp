import {FETCH_CATEGORIES_SUCCESS, FETCH_CATEGORIES_FAILURE} from '../actions/booksAction'

const initialState = {
    user: {},
    isLoading: false,
    error: {},
    books: null,
    categories: null
  };
  
  const booksReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_CATEGORIES_SUCCESS:
        const categories = action.payload
        return {
          ...state,
          categories: categories,
        }
        case FETCH_CATEGORIES_FAILURE:
          return {
            ...state,
            error: action.payload,
          }
        
        default:
          return state
        }  
  };
  
  export default booksReducer;
  