import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Button from 'components/button/button';

describe("Button", function() {
  it("renders a primary button", function() {
    expect(shallow(<Button />).hasClass('primary')).to.equal(true);
  });

  it("renders a secondary button", function() {
    expect(shallow(<Button type="secondary" />).hasClass('secondary')).to.equal(true);
  });

  it("renders a tertiary button", function() {
    expect(shallow(<Button type="tertiary" />).hasClass('tertiary')).to.equal(true);
  });
});