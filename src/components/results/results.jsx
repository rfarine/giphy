import React, { Component, PropTypes } from 'react';
import { get } from 'lodash';
import PreviewImage from 'components/previewImage/previewImage';
import style from './results.scss';

class Results extends Component {
  constructor(props) {
    super(props);
    this.renderResults = this.renderResults.bind(this);
  }

  renderResults() {
    const { results } = this.props;

    return results.map((result) => {
      const still = get(result.images, 'fixed_width_still.url', '');
      const preview = get(result.images, 'fixed_width.url', '');

      return (
        <div key={result.id}>
          <PreviewImage
            preview={preview}
            still={still}
          />
        </div>
      );
    });
  }

  render() {
    const { loading, results } = this.props;

    if (loading) {
      return (
        <div className={style.component}>
          <h2 className={style.text}>Loading...</h2>
        </div>
      );
    }

    if (results.length < 1) {
      return (
        <div className={style.component}>
          <h2 className={style.text}>No results.</h2>
        </div>
      );
    }

    return (
      <div className={style.component}>
        {this.renderResults()}
      </div>
    );
  }
}

Results.propTypes = {
  loading: PropTypes.bool.isRequired,
  results: PropTypes.arrayOf(PropTypes.shape({

  })).isRequired,
};

export default Results;
