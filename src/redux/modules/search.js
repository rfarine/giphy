import { createAction, handleActions } from 'redux-actions';

// Action Types
export const PERFORM_SEARCH = 'search/PERFORM_SEARCH';
export const PERFORM_SEARCH_SUCCESS = 'search/PERFORM_SEARCH_SUCCESS';
export const PERFORM_SEARCH_FAIL = 'search/PERFORM_SEARCH_FAIL';

// Action Creators
export const performSearch = createAction(PERFORM_SEARCH);
export const performSearchSuccess = createAction(PERFORM_SEARCH_SUCCESS);
export const performSearchFail = createAction(PERFORM_SEARCH_FAIL);

// Reducer
const initialState = {
  loading: false,
  results: [],
};

export const reducer = handleActions({
  [PERFORM_SEARCH]: (state, action) => ({
    ...state,
    loading: true,
  }),

  [PERFORM_SEARCH_SUCCESS]: (state, action) => ({
    ...state,
    loading: false,
  }),

  [PERFORM_SEARCH_FAIL]: (state, action) => ({
    ...state,
    loading: false,
  }),
}, initialState);
