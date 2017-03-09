import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as search } from './search';

const reducers = combineReducers({
  router: routerReducer,
  search,
});

export default reducers;
