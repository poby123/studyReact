import React from 'react';
import PropTypes from 'prop-types';

import { Provider } from './FormContext';

export default class FormProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      values: {}, //to save all input value. ex){ name:'Park', age:20, totalAmount:30 }
      errors: {}, //to save error message ex){ name:'You must write name', age:'age is must be older than 18' }
    };
    this.reset = this.reset.bind(this);
    this.onChange = this.onChange.bind(this);
    this.submit = this.submit.bind(this);
  }

  //callback function that is called when input value is changed at 'Input' component.
  onChange(name, updateValue) {
    this.setState(
      ({ values }) => ({
        values: {
          ...values,
          [name]: updateValue,
        },
      }),
      //do validate test with new values
      () => this.validate(this.state.values),
    );
  }
  reset() {
    this.setState({ values: {}, errors: {} });
  }
  submit() {
    this.props.onSubmit(this.state.values);
  }
  validate(values) {
    //validate function of getting through props.
    const { validate } = this.props;

    //check validate function is not undefined.
    if (!validate) {
      return;
    }
    const errors = validate(values);
    this.setState({ errors });
  }
  render() {
    const { values, errors } = this.state;
    return (
      <Provider
        value={{ errors, values, onChange: this.onChange, reset: this.reset, submit: this.submit }}
      >
        {this.props.children}
      </Provider>
    );
  }
}

FormProvider.propTypes = {
  validate: PropTypes.func,
};
