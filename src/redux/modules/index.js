import { combineReducers } from 'redux';
import { reducer as search } from './search';

const reducers = combineReducers({
  search,
});

export default reducers;
