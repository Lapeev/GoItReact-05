import { connect } from 'react-redux';
import ExpensesTable from './expensesTable';
import * as expensesSelector from '../../redux/expenses/expensesSelectors';
import * as expensesActions from '../../redux/expenses/expensesActions';

const mapStateToProps = state => ({
  items: expensesSelector.getExpences(state),
});

const mapDispatchToProps = dispatch => ({
  onRemove: id => dispatch(expensesActions.deleateExpence(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ExpensesTable);
