import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import 'styles/global.scss';
import style from './app.scss';

const App = ({ children }) => {
  return (
    <div className={style.container}>
      <div className={style.nav}>
        <Link to="/">Home</Link>
        <div className={style.seperator}>|</div>
        <Link to="favorites">Favorites</Link>
      </div>
      {children}
    </div>
  );
};

App.defaultProps = {
  children: <div />,
};

App.propTypes = {
  children: PropTypes.node,
};

export default App;
