const userReducer = (state = {}, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        username: action.payload.username,
        password: action.payload.password,
      };
    default:
      return state;
  }
};
export default userReducer;