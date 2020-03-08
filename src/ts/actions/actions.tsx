/* actions.tsx */

/* action types */
export const LOAD_MOVIES = 'LOAD_MOVIES';
export const IS_LOADING = 'IS_LOADING';

/* action creators */
export const loadMovies = (movies: object[]) => {
  return { type: LOAD_MOVIES, movies }
}

export const setLoading = (isLoading: boolean) => {
  return { type: IS_LOADING, isLoading}
}