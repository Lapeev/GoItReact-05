import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import budgetReducer from './budget/budgetReducers';
import expensesReducer from './expenses/expensesReducers';
import stateValidator from './middleware/state-validation';
import crashReporter from './middleware/crash-reporter';

const middleware = [crashReporter, stateValidator];
const enhancer = applyMiddleware(...middleware);

const rootReducer = combineReducers({
  budget: budgetReducer,
  expenses: expensesReducer,
});
const store = createStore(rootReducer, composeWithDevTools(enhancer));

export default store;
