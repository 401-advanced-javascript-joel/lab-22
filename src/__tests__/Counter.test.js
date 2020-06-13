import React from 'react';
import { shallow } from 'enzyme';

import Counter from '../components/Counter';

describe('Counter tests', () => {
  test('inital value test', () => {
    let component = shallow(<Counter />);
    expect(component.state('count')).toBe(0);
  });

  test('test up button', () => {
    let component = shallow(<Counter />);
    component.find('.up.clicker').simulate('click');
    expect(component.state('count')).toBe(1);
    let count = parseInt(component.find('.count').text());
    expect(count).toBe(1);
  });

  test('test down button', () => {
    let component = shallow(<Counter />);
    component.find('.down.clicker').simulate('click');
    expect(component.state('count')).toBe(-1);
    let count = parseInt(component.find('.count').text());
    expect(count).toBe(-1);
  });
});
