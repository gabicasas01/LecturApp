import { SET_USER_NAME } from "../actions/userActions";

const initialState = {
  isLoading: false,
  error: null,
  user: {},
};


const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_NAME:
      const user = action.payload
      return {
        ...state,
        user: user,
      }
      
      default:
        return state
      }
};

export default userReducer;
