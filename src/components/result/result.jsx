import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { goBack } from 'react-router-redux';
import { includes } from 'lodash';
import { getResultById } from 'redux/selectors';
import Button from 'components/button/button';
import style from './result.scss';

class Result extends Component {
  constructor(props) {
    super(props);

    const favorites = window.sessionStorage.getItem('favorites');

    this.toggleFavorite = this.toggleFavorite.bind(this);

    this.state = {
      isFavorite: includes(favorites, props.id),
    };
  }

  toggleFavorite() {
    const { id } = this.props;
    const storage = window.sessionStorage;
    const favorites = JSON.parse(storage.getItem('favorites'));

    if (this.state.isFavorite) {
      const index = favorites.indexOf(id);
      favorites.splice(index, 1);
      storage.setItem('favorites', JSON.stringify(favorites));
      return this.setState({ isFavorite: false });
    }

    favorites.push(id);
    storage.setItem('favorites', JSON.stringify(favorites));
    return this.setState({ isFavorite: true });
  }

  render() {
    const { back, result } = this.props;
    return (
      <div className={style.component}>
        <img
          className={style.image}
          src={result.looping}
          alt=""
        />
        <div className={style.info}>
          <div className={style.meta}>
            <strong>Rating:</strong> <span className={style.rating}>{result.rating}</span>
            <br />
            <strong>Date/Time Uploaded:</strong> {result.dateTime} <br />
            {
              result.userName &&
                <div>
                  <strong>User:</strong> {result.userName}
                </div>
            }
          </div>
          <div className={style.favorite}>
            <a
              className={this.state.isFavorite ? style.heartActive : style.heart}
              onClick={this.toggleFavorite}
              tabIndex="-1"
            >
              &hearts;
            </a>
          </div>
        </div>
        <div className={style.buttonContainer}>
          <Button onClick={back} text="Go Back" />
        </div>
      </div>
    );
  }
}

Result.propTypes = {
  back: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  result: PropTypes.shape({
    dateTime: PropTypes.string.isRequired,
    looping: PropTypes.string.isRequired,
    rating: PropTypes.string.isRequired,
    userName: PropTypes.string,
  }).isRequired,
};

const mapStateToProps = (state, props) => {
  return {
    id: props.params.id,
    result: getResultById(state, props),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    back() {
      dispatch(goBack());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Result);
