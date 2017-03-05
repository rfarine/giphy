import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';
import App from '../../src/components/App';
import SearchBar from '../../src/components/searchBar/searchBar';

describe("App", function() {
  it("renders SearchBar", function() {
    expect(shallow(<App />).contains(<SearchBar />)).to.equal(true);
  });
});