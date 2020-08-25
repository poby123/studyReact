//Form 컴포넌트 역시 공용 컴포넌트로 추가하여 입력 항목을 처리한다.
//생명주기 함수인 getDeriveStateFromProps() 함수를 추가하여 initValues 프로퍼티로 state값을 동기화한다.

import React from 'react';
import PropTypes from 'prop-types';

const { Provider, Consumer } = React.createContext({});

class FormProvider extends React.PureComponent {
  static Consumer = Consumer;

  static getDerivedStateFromProps({ initValues }, prevState) {
    const values = initValues !== prevState.initValues ? initValues : prevState.values;
    return {
      initValues,
      values,
      errors: {},
    };
  }

  constructor(props) {
    super(props);
    this.state = {};
    this.reset = this.reset.bind(this);
    this.validate = this.validate.bind(this);
    this.onChange = this.onChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    const { values, errors } = this.state;
    e.preventDefault(); //이벤트의 전파를 막는다.
    if (Object.values(errors).length === 0) {
      this.props.onSubmit(values); //에러가 없으면 전송한다.
    }
  }

  onChange(name, updatedValue) {
    this.validate(this.state.values);
    this.setState(({ values }) => ({
      values: {
        ...values,
        [name]: updatedValue,
      },
    }));
  }

  reset() {
    this.setState({ values: {} });
  }

  validate(values) {
    const { validate } = this.props;
    if (!validate) {
      return;
    }
    const errors = this.props.validate(values);
    this.setState({ errors });
  }

  render() {
    const { values, erros } = this.state;
    return (
      <Provider value={{ erros, values, onChange: this.onChange, reset: this.reset }}>
        <form onSubmit={this.handleSubmit}>{this.props.children}</form>
      </Provider>
    );
  }
}

FormProvider.propTypes = {
  validate: PropTypes.func,
};

FormProvider.defaultProps = {
  initValues: {},
  validate: () => ({}),
};

export default FormProvider;
