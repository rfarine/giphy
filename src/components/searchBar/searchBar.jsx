import React, { PropTypes } from 'react';
import style from './searchBar.scss';

const SearchBar = ({ onClick }) => {
  return (
    <div className={style.component}>
      <input
        className={style.bar}
        type="text"
        placeholder="Search..."
      />
      <input
        className={style.button}
        type="button"
        onClick={onClick}
        value="Search"
      />
    </div>
  );
};

SearchBar.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default SearchBar;
