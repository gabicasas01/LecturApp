import { FETCH_RECOMMENDATION_FAILURE, FETCH_RECOMMENDATION_REQUEST, FETCH_RECOMMENDATION_SUCCESS } from "../actions/recommendationActions";

const initialState = {
  isLoading: false,
  error: {},
  recommendations: null,
};

const recommendationReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_RECOMMENDATION_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case FETCH_RECOMMENDATION_SUCCESS:
      return {
        ...state,
        recommendations: action.payload,
        isLoading: false
      };
    case FETCH_RECOMMENDATION_FAILURE:
      return {
        ...state,
        error: action.payload,
        isLoading: false
      };
    default:
      return state
  }
};

export default recommendationReducer;
