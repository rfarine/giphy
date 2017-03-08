import { createSelector } from 'reselect';
import { get, map, pick } from 'lodash';

export const searchResults = state => state.search.results;
export const resultById = (state, props) => state.search.results[props.params.id];

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

export const getResultById = createSelector(
  [resultById],
  (result) => {
    const simplifiedResult = pick(result, [
      'images',
      'import_datetime',
      'rating',
      'username',
    ]);

    const looping = get(simplifiedResult.images, 'original.url', '');

    return {
      dateTime: simplifiedResult.import_datetime,
      looping,
      rating: simplifiedResult.rating,
      userName: simplifiedResult.username,
    };
  }
);

export default getSearchResults;
