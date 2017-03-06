import { createAction, handleActions } from 'redux-actions';

// Action Types
export const PERFORM_SEARCH = 'search/PERFORM_SEARCH';
export const PERFORM_SEARCH_SUCCESS = 'search/PERFORM_SEARCH_SUCCESS';
export const PERFORM_SEARCH_FAIL = 'search/PERFORM_SEARCH_FAIL';

// Action Creators
const performSearch = createAction(PERFORM_SEARCH);
const performSearchSuccess = createAction(PERFORM_SEARCH_SUCCESS);
const performSearchFail = createAction(PERFORM_SEARCH_FAIL);

// Reducer
const initialState = {
  loaded: false,
  loading: false,
  results: [],
};

export const reducer = handleActions({
  [PERFORM_SEARCH]: (state, action) => ({
    ...state,
    loading: true,
    loaded: false,
  }),

  [PERFORM_SEARCH_SUCCESS]: (state, action) => ({
    ...state,
    loading: false,
    loaded: true,
  }),

  [PERFORM_SEARCH_FAIL]: (state, action) => ({
    ...state,
    loading: false,
    loaded: true,
  }),
}, initialState);
