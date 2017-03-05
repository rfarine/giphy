import React, { PropTypes } from 'react';
import 'styles/global.scss';
import SearchBar from 'components/searchBar/searchBar';
import Results from 'components/results/results';
import style from './app.scss';

const App = ({ results }) => {
  return (
    <div className={style.container}>
      <SearchBar />
      <Results results={results} />
    </div>
  );
};

App.defaultProps = {
  results: [],
};

App.propTypes = {
  results: PropTypes.arrayOf(PropTypes.shape()),
};

export default App;
