import { connect } from 'react-redux';
import Values from './values';
import * as budgetSelectors from '../../redux/budget/budgetSelectors';

const mapStateToProps = state => ({
  budget: budgetSelectors.getBudget(state),
  expenses: budgetSelectors.getExpenses(state),
  balance: budgetSelectors.getBalance(state),
});

export default connect(mapStateToProps)(Values);
