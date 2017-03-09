import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { go, goBack } from 'react-router-redux';
import { getResultById } from 'redux/selectors';
import style from './result.scss';

const Result = ({
  back,
  home,
  result,
}) => {
  return (
    <div className={style.component}>
      <img
        className={style.image}
        src={result.looping}
        alt=""
      />
      <div className={style.meta}>
        <strong>Rating:</strong> <span className={style.rating}>{result.rating}</span>
        <br />
        <strong>Date/Time Uploaded:</strong> {result.dateTime} <br />
        {
          result.userName &&
            <strong>User:</strong> `${result.userName}`
        }
      </div>
      <div className={style.buttonContainer}>
        <button className={style.homeButton} onClick={home}>Home</button>
        <button onClick={back}>Go Back</button>
      </div>
    </div>
  );
};


Result.propTypes = {
  back: PropTypes.func.isRequired,
  home: PropTypes.func.isRequired,
  result: PropTypes.shape({
    dateTime: PropTypes.string.isRequired,
    looping: PropTypes.string.isRequired,
    rating: PropTypes.string.isRequired,
    userName: PropTypes.string,
  }).isRequired,
};

const mapStateToProps = (state, props) => {
  return {
    result: getResultById(state, props),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    back() {
      dispatch(goBack());
    },
    home () {
      dispatch(go(-2));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Result);
