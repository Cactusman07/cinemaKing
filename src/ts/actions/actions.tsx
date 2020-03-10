/* actions.tsx */

/* action types */
export const LOAD_MOVIES = 'LOAD_MOVIES';

/* action creators */
export const loadMovies = (movies: object[]) => {
  return { type: LOAD_MOVIES, payload: movies }
}