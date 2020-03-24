import React from 'react';
import { shallow } from 'enzyme';
import FeaturedProductsBox from './FeaturedProductsBox.js';

describe('Component FeaturedProductsBox', () => {
  it('should render without crashing', () => {
    const component = shallow(<FeaturedProductsBox />);
    expect(component).toBeTruthy();
  });

  it('should render image (with proper src && alt) without crashing', () => {
    const expectedSrc = 'image';
    const expectedAlt = 'image alt';
    const component = shallow(<FeaturedProductsBox image={expectedSrc} name={expectedAlt} />);
    expect(component.find('img').prop('src')).toEqual(expectedSrc);
    expect(component.find('img').prop('alt')).toEqual(expectedAlt);
  });
});
