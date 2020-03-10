/* reducers.tsx */

import { initialState } from '@store/initialState';
import { LOAD_MOVIES } from '@actions/actions';

const rootReducer = (state: any = initialState, action: any) => {
  if (typeof state === 'undefined') {
    return state;
  }

  if (action.type === '@@INIT') {
    console.log('Initializing...');
    return state;
  }

  if (action.payload === null || action.payload === undefined) {
    console.log('null or undefined ' + action.payload + ' ' + action.type);
    return state;
  } else {
    switch (action.type) {
      case LOAD_MOVIES:
        return { ...state, movies: action.payload };
      default:
        return state;
    }
  }
};

export default rootReducer;
