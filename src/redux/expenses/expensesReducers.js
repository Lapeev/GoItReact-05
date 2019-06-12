import { Type } from './expensesActions';

const expenceReducer = (state = [], action) => {
  switch (action.type) {
    case Type.NEW_EXPENCE:
      return [...state, action.payload];

    case Type.DELEATE_EXPENCE:
      return state.filter(expense => expense.id !== action.payload);

    default:
      return state;
  }
};

export default expenceReducer;
