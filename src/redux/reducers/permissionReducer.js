import * as type from '../actions/types';

const permissionReducer = (state = false, action) => {
  switch (action.type) {
    case type.PERMISSION_ALLOWED:
      return true;
    case type.PERMISSION_DENIED:
      return false;
    default:
      return state;
  }
};
export default permissionReducer;
