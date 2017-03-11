import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { getSearchResults } from 'redux/selectors';
import { performSearch } from 'redux/modules/search';
import Results from 'components/results/results';

class SearchResults extends Component {
  componentDidMount() {
    this.props.search();
  }

  render() {
    const { items, loading } = this.props;

    return (
      <Results
        items={items}
        loading={loading}
      />
    );
  }
}

SearchResults.propTypes = {
  loading: PropTypes.bool.isRequired,
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    preview: PropTypes.string.isRequired,
    still: PropTypes.string.isRequired,
  })).isRequired,
  search: PropTypes.func.isRequired,
};

const mapStateToProps = (state, props) => {
  return {
    items: getSearchResults(state, props.params.searchTerm),
    loading: state.search.loading,
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    search() {
      dispatch(performSearch(props.params.searchTerm));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);
