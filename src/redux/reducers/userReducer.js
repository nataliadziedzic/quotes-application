import * as type from '../actions/types';

const userReducer = (state = {}, action) => {
  switch (action.type) {
    case type.SET_LOGIN_DATA:
      return {
        username: action.payload.username,
        password: action.payload.password,
      };
    default:
      return state;
  }
};
export default userReducer;
