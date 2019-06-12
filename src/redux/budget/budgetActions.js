export const Type = {
  ADD_BALANCE: 'ADD_BALANCE',
};

export const addBalance = value => ({
  type: Type.ADD_BALANCE,
  payload: value,
});
