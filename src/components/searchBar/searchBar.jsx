import React from 'react';
import style from './searchBar.scss';

const SearchBar = () => {
  return (
    <div className={style.component}>
      <input type="text" placeholder="Search..." />
    </div>
  );
};

export default SearchBar;
