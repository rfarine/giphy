import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { UnwrappedSearchBar } from 'components/searchBar/searchBar';

describe("SearchBar", function() {
  it("sets this.state.value to text", function() {
    const props = {
      dispatch: () => {},
    };

    const wrapper = shallow(<UnwrappedSearchBar {...props} />);

    wrapper.find('.bar').simulate('change', { target: { value: 'Some text' } });

    expect(wrapper.state('value')).to.equal('Some text');
  });
});