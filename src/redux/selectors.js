import { createSelector } from 'reselect';
import { flatten, get, map, pick } from 'lodash';

export const searchResults = state => state.search.results;
export const getSearchTerm = state => state.search.searchTerm;
export const resultById = (state, props) => state.search.results[props.params.id];
export const favorites = state => state.search.favorites;

export const getSearchResults = createSelector(
  [searchResults, getSearchTerm],
  (results, searchTerm) => {
    return map(results, (result) => {
      const preview = get(result.images, 'fixed_width.url', '');
      const still = get(result.images, 'fixed_width_still.url', '');

      return {
        id: result.id,
        preview,
        searchTerm,
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

export const getFavorites = createSelector(
  [favorites],
  (faves) => {
    const favoritesList = map(faves, (favoritesGroup, searchTerm) => {
      return map(favoritesGroup, (favorite) => {
        const preview = get(favorite.images, 'fixed_width.url', '');
        const still = get(favorite.images, 'fixed_width_still.url', '');

        return {
          id: favorite.id,
          preview,
          searchTerm,
          still,
        };
      });
    });

    return flatten(favoritesList);
  }
);

export default getSearchResults;
