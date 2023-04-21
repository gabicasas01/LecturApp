export const SET_USER_NAME = 'SET_USER_NAME';

export const setUserName = (user) => {
    return { type: SET_USER_NAME, payload: user };
  };