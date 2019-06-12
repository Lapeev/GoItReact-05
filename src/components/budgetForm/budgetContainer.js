import { connect } from 'react-redux';
import * as budgetActions from '../../redux/budget/budgetActions';
import BudgetForm from './budgetForm';

const mapDispatchToProps = dispatch => ({
  onSave: value => dispatch(budgetActions.addBalance(value)),
});

export default connect(
  null,
  mapDispatchToProps,
)(BudgetForm);
