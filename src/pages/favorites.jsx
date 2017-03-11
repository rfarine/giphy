import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { getFavorites } from 'redux/selectors';
import { fetchFavorites } from 'redux/modules/search';
import Results from 'components/results/results';

class Favorites extends Component {
  componentDidMount() {
    this.props.getFavorites();
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

Favorites.propTypes = {
  loading: PropTypes.bool.isRequired,
  getFavorites: PropTypes.func.isRequired,
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    preview: PropTypes.string.isRequired,
    still: PropTypes.string.isRequired,
  })).isRequired,
};

const mapStateToProps = (state) => {
  return {
    items: getFavorites(state),
    loading: state.search.loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  const storedFavorites = JSON.parse(window.sessionStorage.getItem('favorites'));
  const groupedFavorites = _.chain(storedFavorites).groupBy('searchTerm').map((val, searchTerm) => {
    return {
      searchTerm,
      ids: _.map(val, 'id'),
    };
  }).value();

  return {
    getFavorites() {
      return _.each(groupedFavorites, (favorites) => {
        dispatch(fetchFavorites(favorites.ids, favorites.searchTerm));
      });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
