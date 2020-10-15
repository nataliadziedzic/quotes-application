const permissionReducer = (state = false, action) => {
  switch (action.type) {
    case 'PERMISSION_ALLOWED':
      return (state = true);
    case 'PERMISSION_DENIED':
      return (state = false);
    default:
      return state;
  }
};
export default permissionReducer;
