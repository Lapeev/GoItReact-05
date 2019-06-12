import { connect } from 'react-redux';
import ExpenseForm from './expenseForm';
import * as expenceActions from '../../redux/expenses/expensesActions';

const mapDispatchToProps = dispatch => ({
  onSave: obj => dispatch(expenceActions.newExpense(obj)),
});

export default connect(
  null,
  mapDispatchToProps,
)(ExpenseForm);
