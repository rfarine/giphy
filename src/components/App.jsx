import React, { PropTypes } from 'react';
import 'styles/global.scss';
import style from './app.scss';

const App = ({ children }) => {
  return (
    <div className={style.container}>
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
