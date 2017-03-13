import { createStore, applyMiddleware } from 'redux';
import { apiMiddleware } from '@aftonbladet/redux-api-middleware';
import { browserHistory } from 'react-router';
import { routerMiddleware } from 'react-router-redux';
import createLogger from 'redux-logger';
import reducers from './modules/index';

const logger = createLogger();
const createStoreWithMiddleware = applyMiddleware(
  apiMiddleware,
  logger,
  routerMiddleware(browserHistory)
)(createStore);

export default function configureStore(initialState = {}) {
  return createStoreWithMiddleware(reducers, initialState);
}
