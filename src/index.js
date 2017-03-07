import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import App from 'components/App';
import Results from 'components/results/results';
import configureStore from './redux/configureStore';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <Route path="/:searchTerm" component={Results} />
      </Route>
    </Router>
  </Provider>
, document.getElementById('root'));
