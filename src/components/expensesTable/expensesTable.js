import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Button from '../shared/button';

const Table = styled.table`
  border-collapse: collapse;
  text-align: center;
  width: 100%;

  tr {
    border-bottom: 1px solid #212121;
  }

  td,
  th {
    padding-top: 8px;
    padding-bottom: 8px;
  }
`;

const ExpensesTable = ({ items = [], onRemove }) => {
  return (
    <Table>
      <thead>
        <tr>
          <th>Expense name</th>
          <th>Expense amount</th>
          <th />
        </tr>
      </thead>
      <tbody>
        {items.map(({ id, name, amount }) => (
          <tr key={id}>
            <td>{name}</td>
            <td>{amount}</td>
            <td>
              <Button label="Delete" onClick={() => onRemove(id)} />
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

ExpensesTable.defaultProps = {
  items: [],
};

ExpensesTable.propTypes = {
  items: PropTypes.array,
  onRemove: PropTypes.func.isRequired,
};

export default ExpensesTable;
