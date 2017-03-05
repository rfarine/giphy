import React, { PropTypes } from 'react';
import style from './results.scss';

const Results = ({ children }) => {
  return (
    <div className={style.component}>
      {children}
    </div>
  );
};

Results.defaultProps = {
  children: [{}],
};

Results.propTypes = {
  children: PropTypes.arrayOf(PropTypes.shape()),
};

export default Results;
