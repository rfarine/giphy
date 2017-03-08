import { handleActions } from 'redux-actions';
import { keyBy, merge } from 'lodash';
import createRequestAction from '../createRequestAction';

// Action Types
export const PERFORM_SEARCH = 'search/PERFORM_SEARCH';
export const PERFORM_SEARCH_SUCCESS = 'search/PERFORM_SEARCH_SUCCESS';
export const PERFORM_SEARCH_FAIL = 'search/PERFORM_SEARCH_FAIL';

// Reducer
const initialState = {
  error: null,
  loading: false,
  results: [],
};

function keyById(data) {
  return keyBy(data, 'id');
}

export const reducer = handleActions({
  [PERFORM_SEARCH]: state => ({
    ...state,
    loading: true,
  }),

  [PERFORM_SEARCH_SUCCESS]: (state, action) => ({
    ...state,
    results: keyById(action.payload.data),
    loading: false,
  }),

  [PERFORM_SEARCH_FAIL]: (state, action) => ({
    ...state,
    error: action.payload.error,
    loading: false,
  }),
}, initialState);

// Action Creators
export const performSearch = (searchTerm, opts = {}) => {
  const query = searchTerm.replace(/ /g, '+');

  const defaultOptions = {
    limit: 50,
    offset: 0,
  };

  const options = merge(defaultOptions, opts);

  return createRequestAction({
    endpoint: `http://api.giphy.com/v1/gifs/search?
      q=${query}&
      api_key=dc6zaTOxFJmzC&
      limit=${options.limit}&
      offset=${options.offset}`,
    method: 'GET',
    types: [
      { type: PERFORM_SEARCH },
      { type: PERFORM_SEARCH_SUCCESS },
      { type: PERFORM_SEARCH_FAIL },
    ],
  });
};
