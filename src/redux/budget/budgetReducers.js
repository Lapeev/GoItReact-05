import { Type } from './budgetActions';

const budgetReducer = (state = 0, action) => {
  switch (action.type) {
    case Type.ADD_BALANCE:
      return state + Number(action.payload);

    default:
      return state;
  }
};

export default budgetReducer;
