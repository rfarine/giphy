import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { getSearchResults } from 'redux/selectors';
import { performSearch } from 'redux/modules/search';
import PreviewImage from 'components/previewImage/previewImage';
import style from './results.scss';

class Results extends Component {
  constructor(props) {
    super(props);
    this.renderResults = this.renderResults.bind(this);
  }

  componentDidMount() {
    this.props.search();
  }

  renderResults() {
    const { params, results } = this.props;

    return results.map((result) => {
      return (
        <div key={result.id}>
          <Link to={`/results/${params.searchTerm}/${result.id}`}>
            <PreviewImage
              preview={result.preview}
              still={result.still}
            />
          </Link>
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
  params: PropTypes.shape({
    searchTerm: PropTypes.string.isRequired,
  }).isRequired,
  search: PropTypes.func.isRequired,
  results: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    preview: PropTypes.string.isRequired,
    still: PropTypes.string.isRequired,
  })).isRequired,
};

const mapStateToProps = (state) => {
  return {
    loading: state.search.loading,
    results: getSearchResults(state),
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    search() {
      dispatch(performSearch(props.params.searchTerm));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Results);
