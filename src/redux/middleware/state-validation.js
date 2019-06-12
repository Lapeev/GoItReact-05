import tv4 from 'tv4';
import stateSchema from '../shemas/state-validation.json';

const stateValidator = store => next => action => {
  next(action);

  if (!tv4.validate(store.getState(), stateSchema)) {
    console.warn('Invalid state schema detected!');
    console.log(tv4.error);
  }
};

export default stateValidator;
