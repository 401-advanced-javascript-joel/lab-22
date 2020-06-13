import React from 'react';
import renderer from 'react-test-renderer';
import App from '../App';

describe('snapshot test for app', () => {
  test('matches the snapshot', () => {
    const currentHTML = renderer.create(<App />).toJSON();
    expect(currentHTML).toMatchSnapshot();
  });
});
