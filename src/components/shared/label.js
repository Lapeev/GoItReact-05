import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledLabel = styled.label`
  display: inline-block;
  font-size: 20px;
  color: #171718;
  cursor: pointer;
  ${props => props.customStyles}
`;

const Label = ({ children, customStyles }) => (
  <StyledLabel customStyles={customStyles}>{children}</StyledLabel>
);

Label.defaultProps = {
  children: [],
  customStyles: '',
};

Label.propTypes = {
  children: PropTypes.array,
  customStyles: PropTypes.any,
};

export default Label;
