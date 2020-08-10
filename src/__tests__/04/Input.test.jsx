import React from 'react';
import ReactDOM from 'react-dom';
import Input from '../../03/Input';

describe('<Input>', () => {
  it('renders with out crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Input name="name" />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
