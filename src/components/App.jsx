import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import SearchBar from 'components/searchBar/searchBar';
import Results from 'components/results/results';
import 'styles/global.scss';
import { performSearch } from 'redux/modules/search';
import style from './app.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.submitSearch = this.submitSearch.bind(this);
  }

  submitSearch(searchTerm) {
    const { onSubmitSearch } = this.props;
    onSubmitSearch(searchTerm);
  }

  render() {
    const { loading, results } = this.props;

    return (
      <div className={style.container}>
        <SearchBar onSubmit={this.submitSearch} />
        {
          !loading &&
          <Results
            loading={loading}
            results={results}
          />
        }
      </div>
    );
  }
}

App.propTypes = {
  loading: PropTypes.bool.isRequired,
  onSubmitSearch: PropTypes.func.isRequired,
  results: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

const mapStateToProps = (state) => {
  return {
    loading: state.search.loading,
    results: state.search.results,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmitSearch(searchTerm) {
      dispatch(performSearch(searchTerm));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
