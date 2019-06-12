import React, { Component } from 'react';
import styled from 'styled-components';
import BudgetForm from './budgetForm/budgetContainer';
import ExpenseForm from './expenseForm/expenceFormContainer';
import ExpensesTable from './expensesTable/expenseTableContainer';
import Values from './values/valuesContainer';

const Container = styled.div`
  display: grid;
  grid-template-columns: 400px 1fr;
  align-items: flex-start;
  grid-gap: 24px;
  width: 1000px;
  padding-left: 16px;
  padding-right: 16px;
  margin-left: auto;
  margin-right: auto;
`;

export default class App extends Component {
  state = {};

  render() {
    return (
      <Container>
        <BudgetForm />
        <Values />
        <ExpenseForm />
        <ExpensesTable />
      </Container>
    );
  }
}
