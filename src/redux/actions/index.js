export const selectToughTask = () => ({
  type: 'SELECT_TOUGH',
});
export const selectEasyTask = () => ({
  type: 'SELECT_EASY',
});
export const setLoginData = (username, password) => ({
  type: 'LOGIN',
  payload: {
    username,
    password,
  },
});
export const allowPermission = () => ({
  type: 'PERMISSION_ALLOWED',
});
export const denyPermission = () => ({
  type: 'PERMISSION_DENIED',
});
