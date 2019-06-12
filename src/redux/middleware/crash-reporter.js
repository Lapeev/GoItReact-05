const crashReporter = () => next => action => {
  try {
    next(action);
  } catch (err) {
    console.error('Caught an exception!', err);
    throw err;
  }
};
export default crashReporter;
