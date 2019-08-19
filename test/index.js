import React from 'react';
import renderer from 'react-test-renderer';
import App from '../src/index';

describe('<PaginaSobre />', () => {
  it('renders placeholder div', () => {
    const tree = renderer.create(
      <App />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
