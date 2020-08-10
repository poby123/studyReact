import React from 'react';
import { shallow } from 'enzyme';

import Input from '../../03/Input';

describe('<Input>', () => {
  it('renders without crashing', () => {
    expect(() => {
      shallow(<Input />);
    }).not.toThrow();
  });
  it('has one element', () => {
    const wrapper = shallow(<Input />);
    expect(wrapper.length).toEqual(1);
    expect(wrapper).toHaveLength(1);
  });
});
