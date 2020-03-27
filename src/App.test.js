import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

jest.mock('./components/common/SwipeComponent/SwipeComponent', () => 'SwipeComponent');

it('renders without crashing', () => {
  shallow(<App />);
});
