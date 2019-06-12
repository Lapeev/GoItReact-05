import React, { Component } from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import Form from '../shared/form';
import Label from '../shared/label';
import Input from '../shared/input';
import Button from '../shared/button';

const labelStyles = `
  margin-bottom: 16px;
`;

export default class ExpenseForm extends Component {
  state = {
    name: '',
    amount: 0,
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: Number(e.target.value)
        ? Number(e.target.value)
        : e.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSave({ ...this.state, id: shortid.generate() });

    this.setState({ name: '', amount: 0, id: '' });
  };

  render() {
    const { name, amount } = this.state;
    return (
      <Form onSubmit={this.handleSubmit}>
        <Label customStyles={labelStyles}>
          Enter expense name
          <Input
            type="text"
            name="name"
            value={name}
            onChange={this.handleChange}
          />
        </Label>
        <Label customStyles={labelStyles}>
          Enter expense amount
          <Input
            type="number"
            name="amount"
            value={amount}
            onChange={this.handleChange}
          />
        </Label>

        <Button label="Add" type="submit" />
      </Form>
    );
  }
}

ExpenseForm.propTypes = {
  onSave: PropTypes.func.isRequired,
};
