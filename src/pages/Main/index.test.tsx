import React from 'react';
import {shallow} from 'enzyme';
import Main from './';

describe('<Main>', () => {
  it('renders the component', () => {
    const component = shallow(<Main />);
    expect(component).toMatchSnapshot();
  });
});
