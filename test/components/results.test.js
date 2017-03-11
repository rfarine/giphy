import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Results from 'components/results/results';
import PreviewImage from 'components/previewImage/previewImage';

describe("Results", function() {
  it("renders loading text", function() {
    const props = {
      loading: true,
      items: [
        {
          id: '1',
          preview: '1.gif',
          still: '1_still.gif',
        },
        {
          id: '2',
          preview: '2.gif',
          still: '2_still.gif',
        },
      ],
    };

    expect(shallow(<Results {...props} />).text()).to.equal('Loading...');
  });

  it("renders no results text", function() {
    const props = {
      loading: false,
      items: [],
    };

    expect(shallow(<Results {...props} />).text()).to.equal('No results.');
  });

  it("renders a preview image", function() {
    const props = {
      loading: false,
      items: [
        {
          id: '1',
          preview: '1.gif',
          still: '1_still.gif',
        },
        {
          id: '2',
          preview: '2.gif',
          still: '2_still.gif',
        },
      ],
    };

    expect(shallow(<Results {...props} />).containsMatchingElement(<PreviewImage />)).to.equal(true);
  });
});