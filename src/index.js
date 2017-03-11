import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { IndexRoute, Router, Route, browserHistory } from 'react-router';
import App from 'components/App';
import SearchBar from 'components/searchBar/searchBar';
import SearchResults from 'pages/searchResults';
import Result from 'components/result/result';
import Favorites from 'pages/favorites';
import configureStore from './redux/configureStore';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={SearchBar} />
        <Route path="results/:searchTerm" component={SearchResults} />
        <Route path="results/:searchTerm/:id" component={Result} />
        <Route path="favorites" component={Favorites} />
      </Route>
    </Router>
  </Provider>
, document.getElementById('root'));
