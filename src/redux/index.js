import { combineReducers } from 'redux';
import { reducer as search } from './modules/search';

const store = combineReducers({
  search,
});

export default store;
