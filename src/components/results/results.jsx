import React, { PropTypes } from 'react';
import style from './results.scss';

const Results = ({ results }) => {
  return (
    <div className={style.component}>
      {results}
    </div>
  );
};

Results.defaultProps = {
  results: [],
};

Results.propTypes = {
  results: PropTypes.arrayOf(PropTypes.shape()),
};

export default Results;
