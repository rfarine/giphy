import React, { PropTypes } from 'react';
import style from './searchBar.scss';

const SearchBar = ({ onSubmit }) => {
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
        onClick={onSubmit}
        value="Search"
      />
    </div>
  );
};

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SearchBar;
