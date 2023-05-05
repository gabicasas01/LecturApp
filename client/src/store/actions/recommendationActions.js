import axios from 'axios'

export const FETCH_RECOMMENDATION_REQUEST = 'FETCH_RECOMMENDATION_REQUEST';
export const FETCH_RECOMMENDATION_SUCCESS = 'FETCH_RECOMMENDATION_SUCCESS';
export const FETCH_RECOMMENDATION_FAILURE = 'FETCH_RECOMMENDATION_FAILURE';

export const postUserPreferences = (payload) => {
    return async (dispatch) => {
      dispatch({ type: FETCH_RECOMMENDATION_REQUEST });
  
      try {
        const data = await axios.post('http://localhost:3001/recommendation', payload);
        dispatch({ 
          type: FETCH_RECOMMENDATION_SUCCESS, 
          payload: data.data 
        });

      } catch (error) {
        dispatch({ 
          type: FETCH_RECOMMENDATION_FAILURE, 
          payload: error.message 
        });
      }
    };
  };