import React from 'react';
import 'styles/global.scss';
import SearchBar from 'components/searchBar/searchBar';
import style from './app.scss';

const App = () => {
  return (
    <div className={style.container}>
      <SearchBar />
    </div>
  );
};

export default App;
