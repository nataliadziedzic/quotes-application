const taskReducer = (state = '', action) => {
  switch (action.type) {
    case 'SELECT_TOUGH':
      return (state = 'tough');
    case 'SELECT_EASY':
      return (state = 'easy');
    default:
      return state;
  }
};

export default taskReducer;
