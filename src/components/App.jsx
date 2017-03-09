import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import 'styles/global.scss';
import style from './app.scss';

class App extends Component {
  constructor() {
    super();
    if (!window.sessionStorage.getItem('favorites')) {
      window.sessionStorage.setItem('favorites', JSON.stringify([]));
    }
  }

  render() {
    return (
      <div className={style.container}>
        <div className={style.nav}>
          <Link to="/">Home</Link>
          <div className={style.seperator}>|</div>
          <Link to="favorites">Favorites</Link>
        </div>
        {this.props.children}
      </div>
    );
  }
}

App.defaultProps = {
  children: <div />,
};

App.propTypes = {
  children: PropTypes.node,
};

export default App;
