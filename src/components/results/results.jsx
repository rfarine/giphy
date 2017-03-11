import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import PreviewImage from 'components/previewImage/previewImage';
import style from './results.scss';

class Results extends Component {
  constructor(props) {
    super(props);
    this.renderResults = this.renderResults.bind(this);
  }

  renderResults() {
    const { loading, items } = this.props;

    if (loading) {
      return (
        <h2 className={style.text}>Loading...</h2>
      );
    }

    if (items.length < 1) {
      return (
        <h2 className={style.text}>No results.</h2>
      );
    }

    return items.map((item) => {
      return (
        <div key={item.id}>
          <Link to={`/results/${item.searchTerm}/${item.id}`}>
            <PreviewImage
              preview={item.preview}
              still={item.still}
            />
          </Link>
        </div>
      );
    });
  }

  render() {
    return (
      <div>
        <div className={style.component}>
          {this.renderResults()}
        </div>
      </div>
    );
  }
}

Results.propTypes = {
  loading: PropTypes.bool.isRequired,
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    preview: PropTypes.string.isRequired,
    still: PropTypes.string.isRequired,
  })).isRequired,
};

export default Results;
