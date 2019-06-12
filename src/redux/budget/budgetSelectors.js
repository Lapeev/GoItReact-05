export const getBudget = state => state.budget;
export const getExpenses = state => {
  return state.expenses.length
    ? state.expenses.reduce((acc, el) => acc + el.amount, 0)
    : 0;
};
export const getBalance = state => getBudget(state) - getExpenses(state);
