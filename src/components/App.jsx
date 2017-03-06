import React, { Component, PropTypes } from 'react';
import 'styles/global.scss';
import SearchBar from 'components/searchBar/searchBar';
import Results from 'components/results/results';
import style from './app.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.onSubmitSearch = this.onSubmitSearch.bind(this);
  }

  onSubmitSearch() {
    console.log('I submitted a search!', this.props);
  }

  render() {
    const { results } = this.props;

    return (
      <div className={style.container}>
        <SearchBar onSubmit={this.onSubmitSearch} />
        <Results results={results} />
      </div>
    );
  }
}

App.defaultProps = {
  results: [],
};

App.propTypes = {
  results: PropTypes.arrayOf(PropTypes.shape()),
};

export default App;
