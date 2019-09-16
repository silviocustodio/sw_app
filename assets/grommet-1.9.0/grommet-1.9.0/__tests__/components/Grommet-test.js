// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React from 'react';
import renderer from 'react-test-renderer';

import Grommet from '../../src/js/components/Grommet';

// needed because this:
// https://github.com/facebook/jest/issues/1353
jest.mock('react-dom');

describe('Grommet', () => {
  it('has correct default options', () => {
    const component = renderer.create(
      <Grommet>Sample Grommet</Grommet>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
