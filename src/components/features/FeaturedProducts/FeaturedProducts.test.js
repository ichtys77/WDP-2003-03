import React from 'react';
import { shallow } from 'enzyme';
import FeaturedProducts from './FeaturedProducts';

describe('Component FeaturedProducts', () => {
  it('should render without crashing', () => {
    const component = shallow(<FeaturedProducts />);
    expect(component).toBeTruthy();
  });
});
