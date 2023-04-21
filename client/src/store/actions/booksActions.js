import axios from 'axios'

export const FETCH_CATEGORIES_SUCCESS = 'FETCH_CATEGORIES_REQUEST';
export const FETCH_CATEGORIES_FAILURE = 'FETCH_CATEGORIES_FAILURE'

export const getCategories = () => {
    return async (dispatch) => {
        try {
            const response = await axios.get('http://localhost:3001/categories/getCategories');
            const categories = response.data
            dispatch({
                type: FETCH_CATEGORIES_SUCCESS,
                payload: categories
            })
        } catch (error) {
            dispatch({
                type: FETCH_CATEGORIES_FAILURE,
                payload: error.message
            })            
        }
    };
  };

