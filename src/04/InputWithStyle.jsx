import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class Input extends PureComponent {
  constructor(props) {
    super(props);
    this.setRef = this.setRef.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    const { name, onChange } = this.props;
    if (onChange) {
      onChange(name, e.target.value);
    }
  }
  componentDidMount() {
    if (this.props.autoFocus) {
      this.ref.focus();
    }
  }
  componentDidUpdate() {
    if (this.props.autoFocus) {
      this.ref.focus();
    }
  }
  setRef(ref) {
    this.ref = ref;
  }
  render() {
    const { errorMessage, label, name, value, type, onFocus } = this.props;
    return (
      <div className="input-field">
        <input
          id={`input_${name}`}
          className={`validate ${errorMessage && 'invalid'}`}
          ref={this.setRef}
          onChange={this.handleChange}
          onFocus={onFocus}
          value={value}
          type={type}
        />

        <label className="active" for={`input_${name}`}>
          {label}
        </label>
        {errorMessage && (
          <span className="helper-text" data-error={errorMessage}>
            {errorMessage}
          </span>
        )}
      </div>
    );
  }
}

Input.propTypes = {
  type: PropTypes.oneOf(['text', 'number', 'price']), //문자열 형의 값 'text', 'number', 'price' 중 하나만 가질 수 있다.
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  errorMessage: PropTypes.string,
  label: PropTypes.string,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  autoFocus: PropTypes.bool,
};
Input.defaultProps = {
  onChange: () => {},
  onFocus: () => {},
  autoFocus: false,
  type: 'text',
};

export default Input;
