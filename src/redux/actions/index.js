import * as type from './types';

export const selectToughTask = () => ({
  type: type.SELECT_TOUGH,
});
export const selectEasyTask = () => ({
  type: type.SELECT_EASY,
});
export const setLoginData = (username, password) => ({
  type: type.SET_LOGIN_DATA,
  payload: {
    username,
    password,
  },
});
export const allowPermission = () => ({
  type: type.PERMISSION_ALLOWED,
});
export const denyPermission = () => ({
  type: type.PERMISSION_DENIED,
});
