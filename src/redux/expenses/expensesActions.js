export const Type = {
  NEW_EXPENCE: 'NEW_EXPENCE',
  DELEATE_EXPENCE: 'DELEATE_EXPENCE',
};

export const newExpense = obj => ({
  type: Type.NEW_EXPENCE,
  payload: obj,
});

export const deleateExpence = id => ({
  type: Type.DELEATE_EXPENCE,
  payload: id,
});
