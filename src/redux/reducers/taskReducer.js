import * as type from '../actions/types';

const taskReducer = (state = '', action) => {
  switch (action.type) {
    case type.SELECT_TOUGH:
      return 'tough';
    case type.SELECT_EASY:
      return 'easy';
    default:
      return state;
  }
};

export default taskReducer;
