import { createStore, applyMiddleware } from 'redux';
import { apiMiddleware } from 'redux-api-middleware';
import createLogger from 'redux-logger';
import reducers from './modules/index';

const logger = createLogger();
const createStoreWithMiddleware = applyMiddleware(apiMiddleware, logger)(createStore);

export default function configureStore(initialState = {}) {
  return createStoreWithMiddleware(reducers, initialState);
}
