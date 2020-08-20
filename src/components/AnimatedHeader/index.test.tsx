import React from 'react';
import { shallow } from 'enzyme';
import AnimatedHeader from './';

describe('<AnimatedHeader>', () => {
  it('renders the component', () => {
    const component = shallow(<AnimatedHeader title="Title" />);
    expect(component).toMatchSnapshot();
  });
});
