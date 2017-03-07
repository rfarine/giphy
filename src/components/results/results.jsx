import React, { PropTypes } from 'react';
import style from './results.scss';

const Results = ({
  loading,
  results,
}) => {
  if (loading) {
    return (
      <div className={style.component}>
        Loading...
      </div>
    );
  }

  return (
    <div className={style.component}>
      {results}
    </div>
  );
};

Results.propTypes = {
  loading: PropTypes.bool.isRequired,
  results: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

export default Results;
