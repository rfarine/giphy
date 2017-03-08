import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { getResultById } from 'redux/selectors';
import style from './result.scss';

const Result = ({ result }) => {
  return (
    <div className={style.component}>
      <img
        className={style.image}
        src={result.looping}
        alt=""
      />
      <div className={style.meta}>
        <strong>Rating:</strong> {result.rating} <br />
        <strong>Date/Time Uploaded:</strong> {result.dateTime} <br />
        <strong>User:</strong> {result.userName}
      </div>
    </div>
  );
};

const mapStateToProps = (state, props) => {
  return {
    result: getResultById(state, props),
  };
};

Result.propTypes = {
  result: PropTypes.shape({
    dateTime: PropTypes.string.isRequired,
    looping: PropTypes.string.isRequired,
    rating: PropTypes.string.isRequired,
    userName: PropTypes.string.isRequired,
  }).isRequired,
};

export default connect(mapStateToProps)(Result);
