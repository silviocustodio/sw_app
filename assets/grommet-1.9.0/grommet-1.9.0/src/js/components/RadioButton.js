// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import CSSClassnames from '../utils/CSSClassnames';

const CLASS_ROOT = CSSClassnames.RADIO_BUTTON;

export default class RadioButton extends Component {
  render () {
    const { className, label, ...props } = this.props;
    const classes = classnames(
      CLASS_ROOT,
      {
        [`${CLASS_ROOT}--disabled`]: props.disabled
      },
      className
    );

    return (
      <label htmlFor={props.id} className={classes}>
        <input {...props} className={`${CLASS_ROOT}__input`}
          type="radio" />
        <span className={`${CLASS_ROOT}__control`} />
          <span className={`${CLASS_ROOT}__label`}>
            {label}
          </span>
      </label>
    );
  }
}

RadioButton.propTypes = {
  checked: PropTypes.bool,
  defaultChecked: PropTypes.bool,
  disabled: PropTypes.bool,
  id: PropTypes.string.isRequired,
  label: PropTypes.node.isRequired,
  name: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string
};
