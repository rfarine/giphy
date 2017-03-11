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
    const { items, loading, searchTerm } = this.props;

    return (
      <Results
        items={items}
        loading={loading}
        searchTerm={searchTerm}
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
  searchTerm: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => {
  return {
    items: getSearchResults(state),
    loading: state.search.loading,
    searchTerm: state.search.searchTerm,
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
