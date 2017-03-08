import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import App from 'components/App';
import Results from 'components/results/results';
import Result from 'components/result/result';
import configureStore from './redux/configureStore';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <Route path="results/:searchTerm" component={Results} />
        <Route path="results/:searchTerm/:id" component={Result} />
      </Route>
    </Router>
  </Provider>
, document.getElementById('root'));
