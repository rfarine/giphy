import { createSelector } from 'reselect';
import { get, map } from 'lodash';

const searchResults = state => state.search.results;

export const getSearchResults = createSelector(
  [searchResults],
  (results) => {
    return map(results, (result) => {
      const preview = get(result.images, 'fixed_width.url', '');
      const still = get(result.images, 'fixed_width_still.url', '');

      return {
        id: result.id,
        preview,
        still,
      };
    });
  }
);

export default getSearchResults;
