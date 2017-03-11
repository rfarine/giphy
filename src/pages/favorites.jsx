import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { getSearchResults } from 'redux/selectors';
import { performSearchByIds } from 'redux/modules/search';
import Results from 'components/results/results';

class Favorites extends Component {
  componentDidMount() {
    this.props.getFavorites();
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

Favorites.propTypes = {
  loading: PropTypes.bool.isRequired,
  getFavorites: PropTypes.func.isRequired,
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    preview: PropTypes.string.isRequired,
    still: PropTypes.string.isRequired,
  })).isRequired,
  searchTerm: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => {
  return {
    items: getSearchResults(state),
    loading: state.search.loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  const favorites = JSON.parse(window.sessionStorage.getItem('favorites'));
  const ids = favorites.join(',');

  return {
    getFavorites() {
      dispatch(performSearchByIds(ids));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
