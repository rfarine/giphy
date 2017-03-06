import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { Router, Route, browserHistory } from 'react-router';
import App from 'components/App';
import Results from 'components/results/results';
import reducer from './redux/index';

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <Route path="/:searchTerm" component={Results} />
      </Route>
    </Router>
  </Provider>
, document.getElementById('root'));
