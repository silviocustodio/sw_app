// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React from 'react';
import renderer from 'react-test-renderer';

import TBD from '../../src/js/components/TBD';

describe('TBD', () => {
  it('has correct default options', () => {
    const component = renderer.create(
      <TBD />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
